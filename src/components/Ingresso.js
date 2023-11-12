import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export default function Ingresso({ navigation, nome, logo, data, hora, curto, organizador, sobre, tipo }) {

  function Conferir() {
    if (tipo === 'Avaliar') {
      return (
        navigation.navigate('Avaliar')
      );
    } else {
      return (
        navigation.navigate('Ingresso')
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.rectangle}>
        <View style={styles.title}>
          <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold', color:'#F1C400'}}>
            {curto}
          </Text>
          <Text style={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold', color:'#000'}}>
            {nome}
          </Text>
        </View>
        <View style={styles.loc}>
          <Icon
            name="place"
            size={29}
            color="#8B8688"
          />
          <Text style={{ fontSize: 13, textAlign: 'center', margin: 10, fontWeight: 'bold' }}>
            São Paulo
          </Text>
          <Button
            ViewComponent={LinearGradient}
            buttonStyle={{ borderRadius: 5, alignSelf: 'center' }}
            style={{ width: 100, left: 10 }}
            linearGradientProps={styles.gradiente}
            title={tipo == 'Avaliar' ? 'Avaliar' : 'Ingresso'}
            onPress={Conferir}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  container: {
    margin: 4,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  square: {
    width: 100,
    height: 100,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rectangle: {
    width: 231,
    height: 100,
    margin: 4,
  },
  title: {
    width: 231,
    height: 50,
    top:5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loc: {
    width: 231,
    height: 50,
    top:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gradiente: {
    colors: ["#FF6A13", "#F1C400"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
});