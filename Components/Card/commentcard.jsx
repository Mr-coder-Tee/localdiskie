import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { icons, FONTS, COLORS } from "../../const/index";

const CommentCard = () => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems:'center',}}>
          <View style={styles.userComment}>
            <Avatar
              rounded
              size="small"
              source={icons.profile}
              activeOpacity={0.7}
            />
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>
                  username
                </Text>
                <Image
                  source={icons.varified}
                  resizeMode="center"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: "green",
                    marginLeft: 5,
                  }}
                />
              </View>
              <Text style={{ color: COLORS.darkgray, fontSize: 10 }}>
                3 days
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.menu}
              resizeMode="center"
              style={{ width: 15, height: 15 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.comment}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias unde excepturi tempore alias perferendis explicabo dolore
            ut doloribus temporibus incidunt asperiores, tempora debitis ad
            assumenda. Dicta sunt quae nemo.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  comment: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 10,
  },
  userComment: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
});

export default CommentCard;
