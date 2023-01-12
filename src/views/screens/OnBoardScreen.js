import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import COLORS from '../../consts/colors';


const OnBoardScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}} >
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
            <ImageBackground
                style={{flex: 1}}
                source={require('../../assets/onboardImage.jpg')}>
                <View style={style.details } >
                    <Text style={{color: COLORS.white, fontSize: 35, fontWeight: "bold"}} >
                        Discover
                    </Text>
                    <Text style={{color: COLORS.white, fontSize: 35, fontWeight: "bold"}} >
                        world with us
                    </Text>
                    <Text style={{color: COLORS.white, lineHeight: 15, marginTop: 15, fontStyle: "italic"}} >
                          React Navigation is made up of some core utilities and those are then used by 
                          navigators to create the navigation structure in your app. Don't worry too 
                          much about this for now, it'll become clear soon enough! To frontload the installation 
                          work, let's also install and configure dependencies used by most navigators, then we can 
                          move forward with starting to write some code
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')} >
                    <View style={style.btn}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>Get Started</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
     );
};

const style = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        backgroundColor: COLORS.white,
        height: 50,
        width: 120,
        borderRadius: 9,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default OnBoardScreen;