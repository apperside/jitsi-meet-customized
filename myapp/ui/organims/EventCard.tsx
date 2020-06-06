
import React, { useCallback } from "react";
import FastImage from "react-native-fast-image";
import { Event } from "@models/Event";
import { Box, HFlexBox } from "../atoms/Box";
import Button from "@ui/atoms/button";
import Card from "@ui/atoms/card";
import Text, { BlinkingText } from "@ui/atoms/Text";
import Asset from "@ui/atoms/Asset";
import { DateDiff } from "@utils/dateTimeHelper";
type Props = {
  event: Event,
  onEventSelected?: (event: Event) => void,
  isBooked?: boolean
}
const EventCard: React.FC<Props> = ({ event, onEventSelected, isBooked }) => {

  const onSelected = useCallback(() => {
    onEventSelected?.(event);
  }, [event]);

  const blink = DateDiff.inDays(new Date(), new Date(event.date)) == 0;

  return <Card onPress={onSelected}
    flexDirection="row"
    width={1}
    mt={10}>
    <HFlexBox flex={1}>

      <FastImage
        style={{ width: 100, height: 100, alignSelf: "flex-start", borderWidth: 1, borderColor: "red" }}
        source={{
          uri: "https://unsplash.it/100",
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Box ml={10}
        flex={1}>
        <HFlexBox>
          <Asset size={20}
            name="calendar" />
          <BlinkingText flex={1}
            color="red"
            blink={blink}
            textAlign="right"
            variant="bold">in corso</BlinkingText>
        </HFlexBox>
        <Text variant="bold">{event.title}</Text>
        <HFlexBox>
          <Text mr={5}
            variant="regular">Data:</Text>
          <Text variant="bold">{event.date}</Text>
        </HFlexBox>
        <HFlexBox mt={10}>
          <Text mr={5}
            variant="regular">Prezzo:</Text>
          <Text variant="bold">{event.price.toFixed(2)}€</Text>
        </HFlexBox>
        {!isBooked &&
          <Button mt={20}
            alignSelf="center"
            onClick={onSelected}>PRENOTA</Button>
        }
      </Box>
    </HFlexBox>
  </Card>;
};

export default EventCard;