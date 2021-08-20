import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import tw from "tailwind-react-native-classnames";

//rnfes--Shortcut for React Native Functional component with Stylesheet
//https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})