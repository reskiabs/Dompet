import React, {useMemo, useReducer, useContext} from 'react';
import {AsyncStorage} from "react-native";
import axios from "axios";

//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from "../reducer";
import { cos } from 'react-native-reanimated';

// CONFIG KEYS [Storage Keys]===================================
export const TOKEN_KEY = 'token';
export const PIN_KEY = 'pin';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY, PIN_KEY];


// CONTEXT ===================================
const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});

    // Get Auth state
    const getAuthState = async () => {
        try {
            //GET TOKEN && USER
            let token = await AsyncStorage.getItem(TOKEN_KEY);
            let user = await AsyncStorage.getItem(USER_KEY);
            let pin = await AsyncStorage.getItem(PIN_KEY);
            user = JSON.parse(user);
            // alert(`asynch storage ${user.pin}`)
            if (token !== null && user!== null) await handleLogin({token, user, pin});
            else await handleLogout();

            return {token, user, pin};
        } catch (error) {
            throw new Error(error)
        }
    };

    // Handle Login
    const handleLogin = async (data) => {
        let {token, user, pin} = data;
        try{
            //STORE DATA
            let {token, user} = data;
            let data_ = [[USER_KEY, JSON.stringify(user)], [TOKEN_KEY, token]];
            await AsyncStorage.multiSet(data_);
            await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
            await AsyncStorage.setItem(TOKEN_KEY, token)
            await AsyncStorage.setItem(PIN_KEY, pin ? pin:'NULL')       

            // //AXIOS AUTHORIZATION HEADER
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            //DISPATCH TO REDUCER
            dispatch({type: LOGGED_IN, user:data.user});
        }catch (error) {
            throw new Error(error);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        try{
            console.log("Mencoba Logout" )
            //REMOVE DATA
            // await AsyncStorage.multiRemove(keys);
            await AsyncStorage.removeItem(TOKEN_KEY)
            await AsyncStorage.removeItem(PIN_KEY)
            await AsyncStorage.removeItem(USER_KEY)

            //AXIOS AUTHORIZATION HEADER
            delete axios.defaults.headers.common["Authorization"];

            //DISPATCH TO REDUCER
            dispatch({type: LOGGED_OUT});
        }catch (error) {
            console.log(error.message)
            throw new Error(error);
        }
    };

    //UPDATE USER LOCAL STORAGE DATA AND DISPATCH TO REDUCER
    const updateUser = async (user) => {
        try {
            await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
            dispatch({type: LOGGED_IN, user}); //DISPATCH TO REDUCER
        } catch (error) {
            throw new Error(error);
        }
    };

    const updatePin = async (pin) => {
        try {
            await AsyncStorage.setItem(PIN_KEY, pin);
            dispatch({type: LOGGED_IN, user}); //DISPATCH TO REDUCER
        } catch (error) {
            throw new Error(error);
        }
    };

    const value = useMemo(() => {
        return {state, getAuthState, handleLogin, handleLogout, updateUser, updatePin};
    }, [state]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthProvider;
