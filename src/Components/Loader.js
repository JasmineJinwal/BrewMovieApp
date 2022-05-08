import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Constants from '../Constants';

const Loader = () => {
    return (
        <View>
        {
            <ActivityIndicator size={'large'} color={Constants.textColor}/>
        }
    </View>
    )
}

export default Loader;
