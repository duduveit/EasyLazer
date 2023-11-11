import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style';
import tardezinha from '../../img/tardezinha.jpg'
import { Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Caixa from '../../components/caixa';

const DetalhesEvento = ({ navigation, route }) => {
  const {nome, logo, data, hora, organizador, sobre} =route.params;

  const reservar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Inicio" }]
    });
  }

  return (
    <View style={style.container}>
      <Image style={style.imagem} source={logo} />
      <Text style={style.title}>{nome}</Text>
      <View style={style.icons}>
        <Icon
          name="ear-hearing"
          type='material-community'
          size={29}
          color="#FF6A13"
        />
        <Icon
          name="wheelchair-accessibility"
          size={29}
          type='material-community'
          color="#FF6A13"
        />
        <Icon
          name="eye-off"
          size={29}
          type='material-community'
          color="#FF6A13"
        />
      </View>
      <View style={style.date}>
        <Icon
          containerStyle={{
            backgroundColor: '#fff',
            height: 50,
            width: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1
          }}
          name="calendar-month"
          type='material-community'
          size={29}
          color="#FF6A13"
        />
        <View>
          <Text style={{fontWeight:'bold', left:5}}>
            {data}
          </Text>
          <Text style={{color:'#747688', left: 5}}>
            {hora}
          </Text>
        </View>
      </View>
      <View style={style.loc}>
        <Icon
          containerStyle={{
            backgroundColor: '#fff',
            height: 50,
            width: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1
          }}
          name="map-marker"
          type='material-community'
          size={29}
          color="#FF6A13"
        />
        <View>
          <Text style={{fontWeight:'bold', left: 5}}>
            Neo Química Arena
          </Text>
          <Text style={{color:'#747688', left:5}}>
            Estádio do Corinthians
          </Text>
        </View>
      </View>
      <View style={style.user}>
        <Icon
          containerStyle={{
            backgroundColor: '#fff',
            height: 50,
            width: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1
          }}
          name="account"
          type='material-community'
          size={29}
          color="#FF6A13"
        />
        <View>
          <Text style={{fontWeight:'bold', left: 5}}>
            {organizador}
          </Text>
          <Text style={{color:'#747688', left:5}}>
            Organizador
          </Text>
        </View>
      </View>
      <View style={style.sobre}>
        <Text style={style.texto}>
          {sobre}
        </Text>
      </View>
      <View style={style.botao}>
        <Caixa/>
      </View>
    </View>
  );
};

export default DetalhesEvento;