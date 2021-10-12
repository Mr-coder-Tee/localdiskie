import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import FictureHeader from "../Headers/FictureHeader";
import FictureCard from "../Card/FictureCard";
import { icons } from "../../const";

const games = [
  {
    id: 1,
    gameNum: 1,
    date: "16 october 2021",
    time: "10:00 Am",
    teamA: "Giant Killers",
    teamB: "Mmotong LTD",
    teamALogo:icons.team1,
    teamBLogo:icons.team2,
  },
  {
    id: 2,
    gameNum: 2,
    date: "16 october 2021",
    time: "12:00 Am",
    teamA: "Makgofe united",
    teamB: "Lions of Limpopo",
    teamALogo:icons.team3,
    teamBLogo:icons.team4,
  },
];
const teams = [
  {
    id: 1,
    teamName: "Giant Killers",
    temaLogo: icons.team1,
  },
  {
    id: 2,
    teamName: "Mmotong LTD",
    temaLogo: icons.team2,
  },
  {
    id: 3,
    teamName: "Makgofe united",
    temaLogo: icons.team3,
  },
  {
    id: 4,
    teamName: "Lions of Limpopo",
    temaLogo: icons.team4,
  },
  {
    id: 5,
    teamName: "Thakgalang Fc",
    temaLogo: icons.team5,
  },
  {
    id: 6,
    teamName: "Makgopa FC",
    temaLogo: icons.team6,
  },
  {
    id: 7,
    teamName: "Black FC",
    temaLogo: icons.team7,
  },
  {
    id: 8,
    teamName: "CV united",
    temaLogo: icons.team8,
  },
];
const AddFicture = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FictureHeader />
      <Text>Tournament Name Games:</Text>
      <View>
        <FlatList
          data={games}
          renderItem={({ item, index }) => {
            return <FictureCard data={item} />;
          }}
          keyExtractor={( item ) => `${item.id}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default AddFicture;
