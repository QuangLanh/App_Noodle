import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground, } from 'react-native';

const Info = ({ navigation }) => {
return (

        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../images/background.jpg')}
                resizeMode="cover"
                style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require('../../images/logo.png')} />
                    <Text style={styles.infotext}>INFORMATION</Text>
                    <ImageBackground
                        source={require('../../images/card.png')}
                        resizeMode="cover"
                        style={styles.card}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.user} source={require('../../images/user.jpg')}
                            />
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 10,
                                        marginLeft: 40,
                                    }}>
                                    <Text style={styles.fullname}>Full Name:</Text>
                                    <Text style={styles.name}>Alice Mie</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 40,
                                        marginTop: 5,
                                    }}>
                                    <Text style={styles.fullname}>Birthday:</Text>
                                    <Text style={styles.birthay}> 12/1/1999</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 40,
                                        marginTop: 5,
                                    }}>
                                    <Text style={styles.fullname}>Gender: </Text>
                                    <Text style={styles.gender}>Female</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 40,
                                        marginTop: 5,
                                    }}>
                                    <Text style={styles.fullname}>Department:</Text>
                                    <Text style={styles.department}>Design</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.css_noodles}>
                        <View>
                            <Image style={styles.hover} source={require('../../images/hover.png')} />

                            <Image style={styles.lymy} source={require('../../images/lymy.png')} />

                            

                        </View>
                        <View>
                            <Image style={styles.hover} source={require('../../images/hover.png')} />

                            <Image style={styles.lymy} source={require('../../images/lymy.png')} />

                         

                        </View>

                        <View>
                            <Image style={styles.hover} source={require('../../images/hover.png')} />
                            <Image style={styles.lymy} source={require('../../images/lymy.png')} />

                           
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ color: '#D91313', fontWeight: 'bold', fontSize: 15 }}></Text>
                        <Text style={{ color: '#9C6666', fontSize: 15 }}>
                            {' '}
                           3 cups of noodles left this month
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Done')}>
                    
                    <Image style={styles.add} source={require('../../images/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity
              onPress={() => navigation.navigate('ErrorScreen')}>
              <Image
                style={styles.next}
                source={require('../../images/next.png')}
              />
            </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )




};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 120,
        height: 90,
        alignSelf: 'center',
        marginTop: 20,
    },
    infotext: {
        alignSelf: 'center',
        fontWeight:'900',
        fontSize: 30,
        marginTop: 20,
        fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
        color: '#C71A1A',
    },
    card: {
        width: 350,
        height: 130,
        marginTop: 20,
        alignSelf: 'center',
        marginVertical: 10,
    },
    user: {
        width: 70,
        height: 70,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 30,
    },
    fullname: {
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#880B0B',
    },
    name: {
        fontSize: 15,
        color: '#880B0B',
        marginHorizontal: 30,
    },
    lymy: {
        width: 60,
        height: 90,
    },
    add: {
        width: 300,
        height: 50,
        marginTop: 120,
        alignSelf: 'center',
        
    },
    css_noodles: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 50,
        marginTop: 20,
    },
   
    hover: {
        marginTop: 10,
        width: 80,
        height: 80,
        position: 'absolute',
        marginLeft: -10,
    },
    birthay: {
        marginLeft: 35,
        fontSize: 15,
        color: '#880B0B',
    },
    gender: {
        marginLeft: 45,
        fontSize: 15,
        color: '#880B0B',
    },
    design: {
        marginLeft: 40,
        fontSize: 15,
        color: '#880B0B',
    },
    department: {
        marginLeft: 15,
        fontSize: 15,
        color: '#880B0B',
    },
    next: {
        width: 80,
        height: 50,
        alignSelf: 'center',
        marginLeft: 40,
        marginTop: 40,
      },
});
export default Info;
