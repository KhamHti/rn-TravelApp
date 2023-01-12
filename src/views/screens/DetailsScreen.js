import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
// import places from "../../consts/places";



const DetailsScreen = ({navigation, route}) => {

    const places = route.params;
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
            <ImageBackground 
            style={{flex: 0.7}}
            source={places.image}>
                <View style={style.header}>
                    <Icon 
                    name="arrow-back-ios" 
                    size={30} 
                    color={COLORS.white}
                    onPress={navigation.goBack}
                    />
                    <Icon  
                    name="more-vert" 
                    size={28} 
                    color={COLORS.white}
                    />
                </View>
                <View style={style.imgDetails}>
                    <Text 
                    style={{fontSize: 30,
                    color: COLORS.white,
                    width: "70%",
                    fontWeight: "bold",
                    marginBottom: 20,
                    }}>
                     {places.name}
                    </Text>
                    <View style={{flexDirection: "row"}}>
                        <Icon name='star' size={30} color={COLORS.orange} />
                        <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: COLORS.white,
                            marginLeft: 5,
                        }} >5.0</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={style.detailsContainer} >
                <TouchableOpacity style={style.forIcon}>
                    <Icon name="favorite" size={30} color={COLORS.red} />
                </TouchableOpacity>
                <View style={{flexDirection: "row", marginTop: 10}} >
                    <Icon name="place" size={28} color={COLORS.primary} />
                    <Text 
                    style={{
                        marginLeft: 5, 
                        fontSize: 20, 
                        fontWeight: "bold",
                        color: COLORS.primary,
                        }}>
                         {places.location}
                    </Text>
                </View>
                <Text 
                  style={{
                    marginTop: 20, 
                    fontWeight: "bold", 
                    fontSize: 20}} >
                    About the trip
                </Text>
                <Text style={{marginTop: 20, lineHeight: 20}} > {places.details} </Text>
            </View>
            <View style={style.footer} >
                <View 
                style={{
                    flex: 1, 
                    flexDirection: "row", 
                    alignItems: "center"}} >
                    <Text 
                    style={{
                        fontWeight: "bold", 
                        fontSize: 18, 
                        color: COLORS.white}} >
                            $100
                        </Text>
                    <Text 
                    style={{
                        fontWeight: "bold", 
                        fontSize: 12, 
                        color: COLORS.grey,
                        marginLeft: 3}} >
                            /PER DAY
                        </Text>
                </View>
                <TouchableOpacity style={style.bookNow} >
                    <Text 
                    style={{
                        color: COLORS.primary, 
                        fontWeight: "bold", 
                        fontSize: 16}} >
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    header: {
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    imgDetails: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        position: "absolute",
        bottom: 30,
    },
    forIcon: {
        height: 60,
        width: 60,
        position: "absolute",
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 30,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bookNow: {
        width: 150,
        height: 50,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 10,
    },
});

export default DetailsScreen;