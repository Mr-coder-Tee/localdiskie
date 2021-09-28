import React, { useState } from "react";
import { View, Text,StyleSheet,Dimensions, } from "react-native";
import { BottomSheet,Avatar } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const height=Dimensions.get('screen').height-50

const PostScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log("height",height)
  return (
      <SafeAreaProvider >


    <BottomSheet
      isVisible={isVisible}
      containerStyle={styles.safeareaview}
    >
        <View>
          <Text>bottomsheet</Text>
        </View>
    </BottomSheet>
      </SafeAreaProvider>
  );
};


const styles=StyleSheet.create({
    safeareaview:{

        padding:10,
        backgroundColor: "rgba(0.5, 0.25, 0, 0.3)",
        height:500,
    }
})

export default PostScreen;
