/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StackScreenProps } from "@react-navigation/stack";
import { AppDispatch } from "@redux";
import { logoutOperation } from "@redux/user/operations";
import { MainStack } from "@screen/EntryPoint";
import { Box } from "@ui/atoms/Box";
import Button from "@ui/atoms/button";
import Text from "@ui/atoms/Text";
import WalletCard from "@ui/organims/WalletCard";
import React from "react";
import { useDispatch } from "react-redux";
import { MainTabStack } from "../Main/MainScreen";

type Props = StackScreenProps<MainTabStack & MainStack, "Wallet">

const WalletScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(logoutOperation());
  };

  return (
    <Box px="MAIN_VERTICAL_SPACE">
      <WalletCard />
      <Button mt={20}
        onClick={logout}>LOGOUT</Button>
    </Box>
  );
};



export default WalletScreen;
