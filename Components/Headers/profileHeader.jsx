import React from 'react'
import {View,Text,Image,Animated,StatusBar} from 'react-native'
import { icons, COLORS, FONTS } from "../../const/index";


 const Profileheader = () => {
     return ( 
        <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "skyblue",
          flexDirection: "row",
          flex: 1,
          marginTop: StatusBar.currentHeight,
          height: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          paddingLeft:10,
          paddingRight:10,
        }}
      >
        <View>
          <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>Local Diskie</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderColor: COLORS.white,
          }}
        >
          <Image
            source={icons.profile}
            resizeMode="center"
            style={{ width: 30, height: 30, tintColor: COLORS.white }}
          />
        </View>
      </View>
      );
 }
  
 export default Profileheader;