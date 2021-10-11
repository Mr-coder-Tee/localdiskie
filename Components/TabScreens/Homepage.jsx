import React from "react";
import { View, Text, FlatList,Animated ,StatusBar,SafeAreaView} from "react-native";
import { Postcard, LogIn, Profileheader } from "../index";
import { icons } from "../../const/index";

const data = [
  {
    id: 1,
    username: "Thakgalang FC",
    dsc: "Level 1 - We can play and train while adhering to government guidanceLevel 2 - We can still play and train while adhering to government guidance, especially around the size of gatherings Levels 3 and 4 - No play or training is possible Be kind and look after one another. ",
    img: icons.poster,
    like: "22",
    commets: "33",
    when: "8",
    joined: false,
    liked: true,
  },
  {
    id: 2,
    username: "LTD",
    dsc: "All games will be considered as FINAL and NO Protest will be allowed.Games will be played in (2) 25 minute halves with 5 minute half time rest period.Referee's to keep a running clock. time will not be stopped except for medical emergencies when ambulance on the field",
    img: null,
    like: "12",
    commets: "13",
    when: "3",
    joined: true,
    liked: true,
  },
  {
    id: 3,
    username: "Giant Killers",
    dsc: "All games (group play, semifinals & finals) are 30 minute halves.Medals awarded for 1st & 2nd place",
    img: icons.poster3,
    like: "2",
    commets: "9",
    when: "19",
    joined: false,
    liked: true,
  },
  {
    id: 4,
    username: "Makgopa FC",
    dsc: "The tournament will be governed under NIRSA tournament rules .",
    img: null,
    like: "21",
    commets: "3",
    when: "1",
    joined: false,
    liked: true,
  },
  {
    id: 5,
    username: "Makgofe united",
    dsc: "o be eligible to play in the tournament, all participants must have signed an online waiver with Urban Rec. Players that do not sign.",
    img: icons.poster2,
    like: "120",
    commets: "103",
    when: "5",
    joined: false,
    liked: false,
  },
];


const Home = ({ props, bottomSheet, bottomSheetComment, scrollEvent }) => {
 

  const { navigation } = props;
  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <Postcard
              navigation={navigation}
              data={item}
              bottomSheet={bottomSheet}
              bottomSheetComment={bottomSheetComment}
            />
          );
        }}
        onScroll={(e) => {
          scrollEvent(e.nativeEvent.contentOffset.y);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
