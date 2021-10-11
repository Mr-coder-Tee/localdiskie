import React from 'react'
import { View, Text,Animated } from 'react-native'
import { Profileheader } from '..'

const AnimatedHeader = ({translateY,lastValue}) => {
    console.log("lastvalue: ",lastValue)
    return (
        <Animated.View
        style={{
            transform: [{ translateY: translateY }],
            elevation:4,
            zIndex:100,
            marginBottom:lastValue===0?60:0,
          }}>
             <Profileheader />
        </Animated.View>
    )
}

export default AnimatedHeader
