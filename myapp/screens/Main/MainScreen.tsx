/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "../Home/HomeScreen";
import JitsiScreen from "../Wallet/WalletScreen";
export type MainTabStack = {
  Home: {
    onSwipeItem: () => void, onStopSwipeItem: () => void
  },
  Wallet: undefined,
  Spotify: undefined,
};

const Tab = createMaterialTopTabNavigator<MainTabStack>();

const MainScreen = () => {

  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const onSwipeItem = () => {
    // console.log("set disabled");
    setSwipeEnabled(false);
  };
  const onStopSwipeItem = () => {
    // console.log("set enabled");
    // setTimeout(() => {
    setSwipeEnabled(true);
    // }, [300]);
  };
  return (
    <Tab.Navigator swipeEnabled={swipeEnabled}
      tabBarPosition="bottom">
      <Tab.Screen name="Home"
        component={HomeScreen}
        initialParams={{
          onSwipeItem,
          onStopSwipeItem
        }} />
      <Tab.Screen name="Wallet"
        component={JitsiScreen} />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default MainScreen;
