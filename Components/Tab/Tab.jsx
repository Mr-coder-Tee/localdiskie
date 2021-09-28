import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Animated,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Header } from "react-native-elements";
import { Home, Alert, Figure, LiveScore, Joined, CommentCard, } from "../index";
import { icons, COLORS } from "../../const/index";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
const commentSheetHeight = Dimensions.get("screen").height - 150;
const textinputwidth = Dimensions.get("screen").width - 150;

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const RenderHeader = () => (
    <Header>
      <Text>Header</Text>
    </Header>
  );

  const bottomSheet = useRef();
  const bottomSheetComment = useRef();

  const BottomSheetView = () => (
    <Animated.View>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
        <View>
          <Text>Menu</Text>
        </View>
      </BottomSheet>
    </Animated.View>
  );
  const BottomSheetCommeent = () => (
    <Animated.View 
      
    >
      <BottomSheet
        hasDraggableIcon
        ref={bottomSheetComment}
        height={commentSheetHeight}
      >
        <CommentCard />
        <View style={style.commentsection}>
          <TextInput style={style.input} placeholder="Type here" />
          <TouchableOpacity style={style.sendbtn}>
            <Image
              source={icons.send}
              resizeMode="center"
              style={{ width: 20, height: 20, tintColor: "#009dff" }}
            />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </Animated.View>
  );

  return (
    <View style={style.constainer}>
      <BottomSheetView/>
      <BottomSheetCommeent/>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: [
            {
              backgroundColor: "#0000",
              display: "flex",
            },
            null,
          ],
          // tabBarActiveTintColor: "#e91e63",
          tabBarShowLabel: false,
          scrollEnabled: true,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          children={(props) => (
            <Home
              props={props}
              bottomSheet={bottomSheet}
              bottomSheetComment={bottomSheetComment}
            />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.HomeIcon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Figure"
          children={(props) => <Figure props={props} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.figure}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alert"
          children={(props) => <Alert props={props} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.alert}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Joined"
          children={(props) => <Joined props={props} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.calendar}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LiveScore"
          children={(props) => <LiveScore props={props} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.live}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const style = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  input: {
    width: textinputwidth,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgba(0,0,0,.1)",
  },
  commentsection: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  sendbtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,.1)",
    justifyContent:'center',
    alignItems:'center'

  },
});

export default Tabs;
