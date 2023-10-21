import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style = {styles.container}>
        <Text style = {styles.text}> 
            Pagina Perfil
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
