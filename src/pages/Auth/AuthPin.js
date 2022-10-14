import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { StackActions } from '@react-navigation/native';

import { useAuth } from "../../providers/auth";
export default function AuthLoading(props) {
    const {navigate} = props.navigation;
    const { getAuthState } = useAuth();

    useEffect(() => {
        async function initialize() {
        try {
            const {pin} = await getAuthState();
            if(pin === 'NULL') navigate('BuatPIN')
            else navigate('SecurityCode')
        } catch (e) {
            navigate('SecurityCode')
        }
    }
    initialize()
    }, []);

    
    return (
        <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator/>
        </View>
    );
};