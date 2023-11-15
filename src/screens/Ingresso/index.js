import React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import style from './style'

export default Home = ({ navigation, route }) => {
  const {nome, logo, data, hora, organizador, curto, sobre} =route.params;

  return (
    <View style={style.container}>
      <Text style = {style.nome}>
        {nome}
      </Text>
      <Text style = {style.data}>
        {curto}
      </Text>
      <View style = {style.black}>
        <View style = {style.yellow}>
          <Text style = {style.pedido}>
            Número do pedido
          </Text>
          <Text style = {style.num}>
            3423321
          </Text>
        </View>
      </View>
    </View>
  );
};
