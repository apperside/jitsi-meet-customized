/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StackScreenProps } from "@react-navigation/stack";
import { MainStack } from "@screen/EntryPoint";
import React, { useEffect } from "react";
import { View, Text } from "react-native";


type Props = StackScreenProps<MainStack, "Jitsi">

const JitsiScreen: React.FC<Props> = ({ navigation, route }) => {
  useEffect(() => {

    // setTimeout(() => {
    //   const url = "https://meet.jit.si/exemple";
    //   const userInfo = {
    //     displayName: "User",
    //     email: "user@example.com",
    //     avatar: "https:/gravatar.com/avatar/abc123",
    //     //TODO: add options to hide/show menu entries
    //     //TODO: add option to start in tile mode or not
    //     //TODO: add option to set custom menu entrie with text and callback
    //     //TODO: add option to set auto recording
    //   };
    //   JitsiMeet.call(url, userInfo);
    //   /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
    //   /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    // }, 1000);
    // return () => {
    //   JitsiMeet.endCall();
    // };
  }, []);

  function onConferenceTerminated(nativeEvent: any) {
    /* Conference terminated event */
    navigation.goBack();
    console.warn("onConferenceTerminated");
    // console.log(nativeEvent);
  }

  function onConferenceJoined(nativeEvent: any) {
    /* Conference joined event */
    console.warn("onConferenceJoined");
    // console.log(nativeEvent);
  }

  function onConferenceWillJoin(nativeEvent: any) {
    /* Conference will join event */
    console.warn("onConferenceWillJoin");
    // console.log(nativeEvent);
  }
  return (
    <View>
      <Text>Here i want to integrate my custom Jitsi view</Text>
    </View>
  );
};



export default JitsiScreen;
