/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useOperation } from "@hooks/useOperation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Event } from "@models/Event";
import { checkLoginStatusOperation } from "@redux/user";
import { loginStateSelector } from "@redux/user/selectors";
import LoginScreen from "./Login/LoginScreen";
import MainScreen from "./Main/MainScreen";
import SplashScreen from "./Splash/SplashScreen";
import JitsiScreen from "./Jitst/JitsiScreen";


export type MainStack = {
  Login: undefined,
  Main: undefined,
  Jitsi: undefined,
};

const EntryPoint = () => {

  const Stack = createStackNavigator<MainStack>();

  // min time to dispplay the splash
  const MIN_SPLASH_TIME = 1000;
  const [isInternalLoading, setIsInternalLoading] = useState(true);
  const loginState = useSelector(loginStateSelector);

  const loginChecker = useOperation<boolean, typeof checkLoginStatusOperation>(checkLoginStatusOperation);

  useEffect(() => {
    loginChecker.execute();
  }, []);

  const routes = useMemo(() => {
    if (!!loginState.token || loginState.isAnonymous) {
      return <>
        <Stack.Screen name="Main"
          component={MainScreen} />
        <Stack.Screen name="Jitsi"
          component={JitsiScreen} />
      </>;
    }
    return <Stack.Screen name="Login"
      component={LoginScreen} />;
  }, [loginState.token, loginState.isAnonymous, isInternalLoading]);

  useEffect(() => {
    setTimeout(() => {
      setIsInternalLoading(false);
    }, MIN_SPLASH_TIME);
  }, []);

  if (isInternalLoading || loginChecker.loading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {<Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
        {routes}
      </Stack.Navigator>}
    </NavigationContainer>
  );
};

export default EntryPoint;
