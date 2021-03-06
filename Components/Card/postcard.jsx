import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Avatar, BottomSheet } from "react-native-elements";
import { icons, FONTS, COLORS } from "../../const/index";

const Postcard = ({ navigation, data,bottomSheet,bottomSheetComment }) => {
  //limit of 120 word
  //if liked text text blue
  //if joined text blue
  const [isVisible, setIsVisible] = useState(false);

  const JoinAlert=()=>(
    Alert.alert(
      "Join",
      "Request to Join has been send!",
      [
        {
          text:"OK",onPress:()=>console.log('Joined OK!')
        }
      ]
    )
  )

  
  console.log("img",data.img)

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.containerView}>
        <View style={styles.userDatailsView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Avatar
              rounded
              size="small"
              source={data.teamlogo}
              activeOpacity={0.7}
            />
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>
                  {data.username}
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
                {data.when + " days"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>bottomSheet.current.show()}>
            <Image
              source={icons.menu}
              resizeMode="center"
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text>{data.dsc}</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: data.img ?300:0
            }}
          >
            {data.img && (
              <Image
                source={data.img}
                resizeMode="center"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </View>
        </View>
        <View style={styles.likesComments}>
          <Text style={styles.commentText}>{data.like +" likes"}</Text>
          <Text style={styles.commentText}>{data.commets +" Comments"}</Text>
        </View>
        <View style={styles.requestsView}>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.direction}>
              <Image
                source={icons.like}
                resizeMode="center"
                style={{ width: 20, height: 20, tintColor: data.liked?"#33A1DE":COLORS.black }}
              />
              <Text style={[styles.commentText,{color:data.liked?"#33A1DE":COLORS.darkgray}]}>likes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => bottomSheetComment.current.show()} 
          >
            <View style={styles.direction}>
              <Image
                source={icons.comment}
                resizeMode="center"
                style={{ width: 15, height: 15, tintColor: COLORS.black }}
              />
              <Text style={styles.commentText}>comment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.direction}>
              <Image
                source={icons.join}
                resizeMode="center"
                style={{ width: 15, height: 15, tintColor: data.joined?"#33A1DE":COLORS.black }}
              />
    
              <Text style={[styles.commentText,{color: data.joined?"#33A1DE": COLORS.darkgray,}]}>Join</Text>
            </View>
          </TouchableOpacity>
        </View>      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  containerView: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLORS.white,
    marginBottom: 5,
    // minHeight:10,
  },
  userDatailsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  likesComments: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  commentText: {
    marginLeft: 5,
  },
  requestsView: {
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.darkgray,
    padding: 5,
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
    flex: 1,
    padding: 10,
  },
});

export default Postcard;
