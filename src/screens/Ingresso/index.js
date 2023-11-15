import React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import style from './style'
import QRCode from 'react-native-qrcode-svg';

export default Home = ({ navigation, route }) => {
  const {nome, logo, data, hora, organizador, curto, sobre} =route.params;
  const num = '3423321';
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
            {num}
          </Text>
          <View style = {style.code}>
            <QRCode
              size = {200}
              value= {num}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
