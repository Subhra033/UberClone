import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames";

//rnfes--Shortcut for React Native Functional component with Stylesheet

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={tw`text-red-500 p-10`}>I am HomeScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
