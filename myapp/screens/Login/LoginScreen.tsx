/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useLogin } from "@hooks/useLogin";
import { hp, wp } from "@hooks/useScreen";
import Asset from "@ui/atoms/Asset";
import { Box, FlexBox } from "@ui/atoms/Box";
import Button from "@ui/atoms/button";
import Text from "@ui/atoms/Text";
import Swiper from "@ui/organims/react-native-swiper";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  loginForm: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    opacity: 0.7,
    backgroundColor: "#000",
  },
});
const features = [{ description: "COOL FEATURE 1" }, { description: "COOL FEATURE 2" }, { description: "COOL FEATURE 3" }, { description: "COOL FEATURE 4" }];
const LoginScreen = () => {

  const { login, anonymousLogin, isLoading } = useLogin();

  return (
    <View style={styles.container}>
      <Asset width={"100%"}
        height={"100%"}
        source={"https://unsplash.it/414/736"}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <Box px={wp(10)}
          flex={1}
          alignItems="center"
          py={hp(10)}
          style={styles.loginForm}>
          <Asset source="https://unsplash.it/400/200"
            width={wp(80)}
            height={wp(80) / 2} />
          <FlexBox flex={1}
            justifyContent="center">
            <Swiper
              containerStyle={{ borderRadius: 12, height: 150, opacity: 1, backgroundColor: "white" }}
              autoplay
              showsButtons={false}
              showsPagination={true}
            >
              {features.map((item) => {
                return <Text
                  key={item.description}
                  width={wp(80)}
                  py={20}
                  color="black"
                  textAlign="center"
                >{item.description}</Text>;
              })}
            </Swiper>

          </FlexBox>
          {(isLoading) &&
            <ActivityIndicator></ActivityIndicator>
          }
          <Button
            width={1}
            onClick={login}>ACCEDI</Button>

          <Text color="white"
            mt={20}
            onPress={anonymousLogin}
            variant="bold">Accedo dopo</Text>
        </Box>
      </Asset>
    </View >
  );
};

export default LoginScreen;
