import React from "react";
import { View, Text, StyleSheet,FlatList,SafeAreaView } from "react-native";
import { MyFigtureCard,Profileheader } from "../index";
import { icons, FONTS,COLORS } from "../../const/index";

const data = [
  {
    id: 1,
    tournamentname: "tournamentname1",
    date: "23 December 2021",
    numberTeam: 32,
    poster:icons.poster2,
  },
  {
    id: 2,
    tournamentname: "tournamentname2",
    date: "16 December 2021",
    numberTeam: 16,
    poster: null,
  },
  {
    id: 3,
    tournamentname: "tournamentname3",
    date: "20 November 2021",
    numberTeam: 8,
    poster: icons.poster3,
  },
];

const Figure = ({props}) => {
  const{navigation}=props
  return (
    <SafeAreaView style={styles.container}>
   
      <Text style={{ ...FONTS.h1,color:COLORS.black,fontWeight:'bold' }}>Your Tournaments</Text>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>`${item.id}`}
        renderItem={({item})=>{
            return(
                <MyFigtureCard data={item}  navigation={navigation}/>
            )
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
  },
});

export default Figure;
