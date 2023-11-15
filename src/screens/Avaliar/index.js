import {React, useState} from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import style from './style';
import { Icon, Button } from 'react-native-elements';
import Caixa2 from '../../components/caixa2';

const Avaliar = ({ navigation, route }) => {
  const {nome, logo, data, hora, organizador, sobre} =route.params;

  const [value, setValue] = useState('');



  return (
    <View style={style.container}>
      <Image style={style.imagem} source={logo} />
      <Text style={style.nome}>
        {nome}
      </Text>
      <Text style={style.title}>
        Deixe a sua avaliação!
      </Text>

      <View style={style.sobre}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={160}
          style={style.texto}
          onChangeText={value => {
            setValue(value)
          }
          }
          value={value}>
        </TextInput>
      </View>
      <View style={style.botao}>
        <Caixa2/>
      </View>
    </View>
  );
};

export default Avaliar;