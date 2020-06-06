/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useScreen } from "@hooks/useScreen";
import { Event } from "@models/Event";
import { StackScreenProps } from "@react-navigation/stack";
import { AppDispatch } from "@redux";
import { getEventsOperation } from "@redux/events";
import { eventsSelector } from "@redux/events/selectors";
import { MainTabStack } from "@screen/Main/MainScreen";
import Asset from "@ui/atoms/Asset";
import { Box } from "@ui/atoms/Box";
import Swiper from "@ui/organims/react-native-swiper";
import EventCard from "@ui/organims/EventCard";
import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MainStack } from "../EntryPoint";

type Props = StackScreenProps<MainTabStack & MainStack, "Home">

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch<AppDispatch>();

  const screen = useScreen();
  const width = screen.width * 0.8;
  const height = width / 2;
  useEffect(() => {
    dispatch(getEventsOperation());
  }, []);

  const events = useSelector(eventsSelector);

  const onEventSelected = (event: Event) => {
    navigation.navigate("Jitsi");
  };

  const data = [
    { id: 1, image: "https://unsplash.it/id/1/500/200" },
    { id: 2, image: "https://unsplash.it/id/2/500/200" },
    { id: 3, image: "https://unsplash.it/id/3/500/200" },
    { id: 4, image: "https://unsplash.it/id/4/500/200" },
    { id: 1, image: "https://unsplash.it/id/1/500/200" },
    { id: 2, image: "https://unsplash.it/id/2/500/200" },
    { id: 3, image: "https://unsplash.it/id/3/500/200" },
    { id: 4, image: "https://unsplash.it/id/4/500/200" }
  ];

  return (
    <Box flex={1}
      px="MAIN_VERTICAL_SPACE">
      <Box height={200}>

        <Swiper containerStyle={{ borderRadius: 12, height: 150, opacity: 1, backgroundColor: "transparent" }}
          showsButtons={false}
          // height={100}
          scrollViewContentContainerStyle={{ borderRadius: 12 }}
          scrollViewStyle={{ borderRadius: 12 }}

          autoplay
          onTouchStart={() => route.params?.onSwipeItem()}
          onMomentumScrollEnd={() => route.params?.onStopSwipeItem()}
          showsPagination={false}
        >
          {data.map((item) => {
            return <Box borderRadius={12}
              key={item.id}><Asset

                width={"100%"}
                height={150}
                resizeMode="cover"
                style={{ borderRadius: 12, alignSelf: "flex-start" }}
                source={item.image}
              /></Box>;
          })}
        </Swiper>
      </Box>
      <Box flex={1}>
        <FlatList
          data={events}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: event }) => <EventCard key={event.id}
            onEventSelected={onEventSelected}
            event={event} />}
          keyExtractor={item => item.id.toString()}
        />
      </Box>

    </Box>
  );
};


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default HomeScreen;
