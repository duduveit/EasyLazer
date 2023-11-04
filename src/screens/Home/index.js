import React from 'react';
import { Text, View, Button } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import style from '../Home/style'

export default Home = ({ navigation }) => {
  return (
    <View style={style.container}>
        <Input
          placeholder="Localização"
        />
      <Text style={{ color: '#fff', fontSize: 30 }}>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('DetalhesEvento');
        }}
        title="detalhes do evento"
      />
    </View>
  );
};
