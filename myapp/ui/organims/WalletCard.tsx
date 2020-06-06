
import React from "react";
import { HFlexBox, VFlexBox } from "../atoms/Box";
import Card from "../atoms/card";
import Text from "../atoms/Text";
type Props = {}
const WalletCard: React.FC<Props> = ({ }) => {


  return <Card flexDirection="column"
    width={1}
    mt={10}>
    <VFlexBox>
      <HFlexBox >
        <Text fontSize={30}>140</Text>
        <Text>tkn</Text>
      </HFlexBox>
      <Text mt={10} >Scopri come guadagnare altri token</Text>
    </VFlexBox>
  </Card>;
};

export default WalletCard;