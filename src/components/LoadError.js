import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function LoadError({isLoading, error}) {

    if (isLoading) {
        return (


            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <LottieView
                    source={require("../../assets/jsons/animation - 1733500452986.json")}
                    autoPlay
                    style={{ width: 300, height: 300 }}
                    loop
                />
            </View>

        )
    }

    if (error) {
        return (
            <View style={{ justifyContent: "center", alignContent: "center", height: "100%" }}>
                <Text>We might have an error, please...</Text>
            </View>
        )
    }
    return null

}