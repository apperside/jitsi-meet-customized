// @flow

// Apply all necessary polyfills as early as possible to make sure anything imported henceforth
// sees them.
import './features/mobile/polyfills';

import React, { PureComponent } from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import { remote, PlayerState } from "react-native-spotify-remote";
import { _initLogging } from './features/base/logging/functions';
import { IncomingCallApp } from './features/mobile/incoming-call';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { App } from "./features/app";


declare var __DEV__;

/**
 * The type of the React {@code Component} props of {@link Root}.
 */
type Props = {

    /**
     * The URL, if any, with which the app was launched.
     */
    url: Object | string
};

const HomeScreen: React.FC = props => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => { (props as any).navigation.navigate("Details") }}>
                <Text >Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
const Stack = createStackNavigator();
const MyApp: React.FC<Props> = props => {

    console.warn(props)
    const Details = () => {
        return <App {...props} />
    }
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default MyApp;