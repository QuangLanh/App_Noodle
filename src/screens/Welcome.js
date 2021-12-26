import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity, Image,SafeAreaView, ImageBackground,} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../images/background.jpg')}
        resizeMode="cover"
       >
        <View>
          <Image style={styles.logo} source={require('../../images/logo.png')} />
          <Text style={styles.text1}>WELCOME</Text>

<View style={styles.boder1}>
<View style={styles.boder2}>

         <ImageBackground style={styles.image1} source={require('../../images/image1.png')} >
         <Image style={styles.clip} source={require('../../images/clip.png')} />
         </ImageBackground>
</View>
</View>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image style={styles.image2} source={require('../../images/QR.png')} />
            <Text style={styles.text2}>Follow the arrow to scan card</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
            <Image
              style={styles.image3}
              source={require('../../images/checkQR.jpg')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Info')}>
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
    justifyContent:'center',
    alignItems:'center',
  },
  background: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginBottom:35,
    width: 150,
    height: 120,
    alignSelf: 'center',
  },
  text1: {
    alignSelf: 'center',
    marginBottom:15,
    fontSize: 40,
    fontWeight:'900',
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  image1: {
    justifyContent:'center',
    alignItems:'center',
    width: 320,
    height: 190,
    borderRadius:10
  },
  clip:{
    width: 70,
    height: 70,
    opacity:0.7
  },
  boder1:{
    borderWidth:10,
    marginBottom:25,
    borderColor:'#FFFFFF',
    borderRadius:15,
  },
  boder2:{
    borderWidth:10,
    borderColor:'#FFB906',
    borderRadius:15,
  },
  image2: {
    width: 40,
    height: 50,
    marginBottom:30,
  },
  text2: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18,
    alignSelf: 'center',
    marginBottom:30,
    color: '#ae0808',
  },
  image3: {
    width: 110,
    height: 140,
    borderRadius: 10,
    marginBottom:10,
    marginLeft: 120,
  },
  next: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    marginLeft: 40,
    marginTop: 40,
  },
});

export default Welcome;