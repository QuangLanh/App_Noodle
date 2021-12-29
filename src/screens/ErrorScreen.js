import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const error = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../images/logo.png')} />
          <Text style={styles.text1}>ERROR</Text>
          <Text style={styles.text2}>Can not recongnize your ID card. </Text>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Image
              style={styles.again}
              source={require('../../images/again.png')}
            />
          </View>
          <Image style={styles.error} source={require('../../images/error.png')} />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image style={styles.image2} source={require('../../images/QR.png')} />
            <Text style={styles.text3}>Follow the arrow to scan card</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60}}>
            <Image
              style={styles.checkQR}
              source={require('../../images/checkQR.jpg')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Welcome')}>
              <Image
                style={styles.next}
                source={require('../../images/next.png')}
              />
            </TouchableOpacity>
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
  imagebackgroud: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  text1: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 20,
    fontWeight:'900',
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  error: {
    alignSelf: 'center',
    width: 90,
    marginTop: 20,
    height: 110,
  },
  text2: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 20,
    fontSize: 18,
    alignSelf: 'center',
    color: '#ae0808',
},
  checkQR: {
    width: 110,
    height: 140,
    borderRadius: 10,
    marginLeft: 120,
  },
  text3: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18,
    alignSelf: 'center',
    marginBottom:30,
    color: '#ae0808',
  },
  image2: {
    width: 40,
    height: 50,
    marginBottom:30,
  },
  next: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    marginLeft: 40,
  },
  again: {
    width: 150,
    height: 30,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default error;
