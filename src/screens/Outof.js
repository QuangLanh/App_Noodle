import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground,} from 'react-native';

const Outof = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../images/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../images/logo.png')} />
          <Text style={styles.text_Outof}>OUT OF NOODLES</Text>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
            <Text style={styles.text_content}>There is</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              {' '}
              0
            </Text>
            <Text style={styles.text_content}> cup of noodles left in the</Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              color: '#C71A1A',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            machine. Please fill in to continue.
          </Text>
          <View style={styles.css_noodles}>
                        <View>
                            <Image style={styles.image_noodles} source={require('../../images/lymohinh.png')} />
                            </View>
                            <View>    
                            <Image style={styles.image_noodles2} source={require('../../images/lymohinh.png')} />
                            </View>
                            <View>
                            <Image style={styles.image_noodles} source={require('../../images/lymohinh.png')} />
                            </View>
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
        marginTop: 10,
      },
      text_Outof: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 10,
        color: '#C71A1A',
      },
      text_content: {
        color: '#C71A1A',
        fontSize: 20,
        fontWeight: 'bold',
      },
      css_noodles: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 50,
        marginTop: 20,
    },
      image_noodles: {
        width: 110,
        height: 190,
        alignSelf: 'center',
        marginTop: 30,
      },
      image_noodles2: {
        width: 125,
        height: 215,
        alignSelf: 'center',
        marginTop: 30,
      },
    });
    
    export default Outof;
    
                         

                        

                        
                            

                           
  
