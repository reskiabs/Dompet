import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { StackActions } from '@react-navigation/native';

import { useAuth } from "../../providers/auth";
export default function AuthLoading(props) {
    const {navigate} = props.navigation;
    const { getAuthState } = useAuth();

    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {
        try {
            const {user} = await getAuthState();
            if (user) {
                //check if username exist
                let username = !!(user.username);
                if (username) navigate('AuthPin');
                else navigate('SplashScreen', {}, StackActions.replace({ routeName: "SplashScreen" }))

            } else navigate('SplashScreen');
        } catch (e) {
            navigate('SplashScreen');
        }
    }

    return (
        <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator/>
        </View>
    );
};