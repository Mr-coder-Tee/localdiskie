import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { FONTS, COLORS } from "../../const";
import { Swipeable } from "react-native-gesture-handler";

const FictureCard = ({ data }) => {



    // conponents-----------------------------
    const swipeRight=()=>(
        <View style={{flexDirection:'row',backgroundColor:COLORS.darkgray,justifyContent:'center'}}>
            <View style={{backgroundColor:COLORS.danger,padding:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>Delete</Text>
            </View>
            <View style={{backgroundColor:COLORS.primary,padding:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>Edit</Text>
            </View>
        </View>
    )


  return (
    <Swipeable renderRightActions={swipeRight} containerStyle={{overflow: 'hidden'}}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.container}>
          <View style={styles.logosContainer}>
            <View style={styles.logo}>
              <Avatar rounded source={data.teamALogo} size="small" />
            </View>
            <View style={styles.logo}>
              <Avatar rounded source={data.teamBLogo} size="small" />
            </View>
          </View>
          <View style={styles.gameDetails}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: COLORS.black,
                }}
              >
                {data.teamA + " Vs " + data.teamB}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: COLORS.darkgray,
                }}
              >
                {"Game #: " + data.gameNum}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: COLORS.darkgray,
                }}
              >
                {data.date + ", " + data.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "white",
    padding: 20,
  },
  logosContainer: {
    flexDirection: "row",
  },
  logo: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  gameDetails: {
    marginLeft: 10,
  },
});

export default FictureCard;
