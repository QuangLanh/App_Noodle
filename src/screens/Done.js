import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground,} from 'react-native';

const Done = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../images/logo.png')} />
          <Text style={styles.text1}>DONE</Text>
          <ImageBackground
            source={require('../../images/done.png')}
            resizeMode="cover"
            style={styles.imgdone}></ImageBackground>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.text2}> Enjoy your noodles</Text>
            <Image style={styles.tim} source={require('../../images/tim.png')} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <Image
                style={styles.tohome}
                source={require('../../images/tohome.png')}
              />
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('Outof')}
             style={styles.text3}>Get them below</Text>
            <Image 
            style={styles.down} source={require('../../images/down.png')} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  text1: {
    alignSelf: 'center',
    fontWeight:'900',
    fontSize: 40,
    marginTop: 20,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  imgdone: {
    width: 140,
    height: 160,
    marginTop: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  text2: {
    color: '#C71A1A',
    fontFamily: 'PaytoneOne',
    fontSize: 25,
  },
  tim: {
    width: 30,
    height: 25,
    marginLeft: 10,
    marginTop: 5,
  },
  tohome: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginTop: 150,
  },
  text3: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#F8C135',
  },
  down: {
    width: 25,
    marginTop:20,
    height: 40,
    alignSelf: 'center',
  },
});

export default Done;
