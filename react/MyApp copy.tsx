// @flow

// Apply all necessary polyfills as early as possible to make sure anything imported henceforth
// sees them.
import './features/mobile/polyfills';

import React, { PureComponent } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import { App } from './features/app';
import { _initLogging } from './features/base/logging/functions';
import { IncomingCallApp } from './features/mobile/incoming-call';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
declare var __DEV__;

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

/**
 * The type of the React {@code Component} props of {@link Root}.
 */
type Props = {

    /**
     * The URL, if any, with which the app was launched.
     */
    url: Object | string
};

const Stack = createStackNavigator();
const MyApp: React.FC<Props> = props => {

    return <NavigationContainer>
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </View>
    </NavigationContainer>
}

export default MyApp;