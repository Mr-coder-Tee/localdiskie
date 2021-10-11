import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons } from "../../const/index";
import { Avatar } from "react-native-elements";

const MyFigtureCard = ({ data,nav }) => {
  console.log("card->", nav);

  return (
    <TouchableOpacity onPress={()=>nav.navigate('AddFicture')}>
      <View style={styles.container}>
        <Avatar
          rounded
          source={data.poster ? data.poster : icons.profile}
          activeOpacity={0.7}
          size="medium"
        />
        <View style={styles.detailsContainer}>
          <Text style={{ ...FONTS.h3, color: COLORS.black, fontWeight: "600" }}>
            {data.tournamentname}
          </Text>
          <Text style={{ color: COLORS.darkgray }}>{data.date}</Text>
          <Text style={{ color: COLORS.darkgray }}>Top: {data.numberTeam}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 5,
  },
});
export default MyFigtureCard;
