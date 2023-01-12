import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity,FlatList, ScrollView, TextInput } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import places from '../../consts/places';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {

    const CategoryIcons = [
        <Icon name='flight' size={25} backgroundColor={COLORS.primary} />,
        <Icon name='beach-access' size={25} backgroundColor={COLORS.primary} />,
        <Icon name='near-me' size={25} backgroundColor={COLORS.primary} />,
        <Icon name='place' size={25} backgroundColor={COLORS.primary} />
    ];

    const ListCha = () => {
        return(
            <View style={style.listContainer}>
                {CategoryIcons.map((icon, index) => (
                    <TouchableOpacity key={index} style={style.IconContainer} >{icon}</TouchableOpacity>
                ))}
            </View>
        );
    };

    const Card = ({places}) => {
        return(
            <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={() => navigation.navigate('DetailsScreen', places)}>
            <ImageBackground 
            style={style.cardImage}
            source={places.image}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 10, 
                }}> 
                    {places.name} 
                </Text>
                <View 
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>
                    <View style={{flexDirection: 'row'}} >
                        <Icon name='place' size={20} color={COLORS.white} />
                        <Text style={{color: COLORS.white, fontWeight: 'bold', marginLeft: 5}} > {places.location } </Text>
                    </View>
                    <View style={{flexDirection: 'row'}} >
                        <Icon name='star' size={20} color={COLORS.white} />
                        <Text style={{color: COLORS.white, fontWeight: 'bold', marginLeft: 5}} >5.0</Text>
                    </View>
                </View>
            </ImageBackground>
            </TouchableOpacity>
        )
    };

    const RecommendedCard = ({places}) => {
        return (
            <ImageBackground 
             style={style.rmCard}
             source={places.image} >
                 <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginTop: 10, 
                }}> 
                    {places.name} 
                </Text>
                <View 
                    style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>
                    <View style={{flexDirection: 'row', width: "100%", marginTop: 10}}>
                        <View style={{flexDirection: 'row'}} >
                            <Icon name='place' size={25} color={COLORS.white} />
                            <Text style={{color: COLORS.white, fontWeight: 'bold', marginLeft: 5 }} > {places.location } </Text>
                        </View>
                        <View style={{flexDirection: 'row'}} >
                            <Icon name='star' size={25} color={COLORS.white} />
                            <Text style={{color: COLORS.white, fontWeight: 'bold', marginLeft: 5 }} > 5.0 </Text>
                        </View>
                    </View>
                    <Text style={{color: COLORS.white, fontSize: 13}}>{places.details}</Text>
                </View>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            <View style={style.header} >
                <Icon name='sort' size={30} color={COLORS.white} onPress={() => navigation.navigate("OnBoardScreen")} />
                <Icon name='notifications-none' size={30} color={COLORS.white} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
              <View style={{backgroundColor: COLORS.primary, height: 120, paddingHorizontal: 20,}} >
                <View>
                    <Text style={style.headerTitle} >Explore the</Text>
                    <Text style={style.headerTitle} >beautiful places</Text>
                    <View style={style.inputContainer} >
                        <Icon name='search' size={28} />
                        <TextInput placeholder='Search' style={{color: COLORS.grey}} />
                    </View>
              </View>
              </View>
              <ListCha />
              <Text style={style.sectionText} >Places</Text>
              <View>
                    <FlatList 
                        contentContainerStyle={{paddingLeft: 20}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places} 
                        renderItem={({item}) => <Card places={item}  /> }
                    />
                    <Text style={style.sectionText} >Recommended</Text>
                    <FlatList
                        snapToInterval={width - 20}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
                        horizontal
                        data={places}
                        renderItem={({item}) => <RecommendedCard places={item}/>  }/>
              </View>
            </ScrollView>
        </SafeAreaView>
    ) ;
};


const style = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        height: 60,
        width: '100%',
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 15,
    },
    listContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    IconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    sectionText: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    rmCard: {
        width: width-40,
        height: 200,
        marginRight: 20,
        overflow: 'hidden',
        padding: 10,
        borderRadius: 10,
    },

});

export default HomeScreen;