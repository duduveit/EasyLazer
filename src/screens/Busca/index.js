import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style'
import { Searchbar, Card } from 'react-native-paper';
import Cartao from '../../components/cartao';
import tardezinha from '../../img/tardezinha.jpg';
import Corinthians from '../../img/Corinthians.png'

const Search = ({ navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={style.container}>
      <Searchbar
        placeholder="Estádio"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{top:20}}
      />
      <Card style={style.containerCards}>
        <Cartao 
          navigation={navigation} 
          nome ={'Tardezinha - Neo Química Arena'} 
          logo = {tardezinha}
          data = {'13 Dezembro, 2024'}
          hora = {'Sábado, 17:00 - 21:00'}
          curto = {'Sab, 13 Dez - 17:00 - 21:00'}
          organizador = {'Tardezinha'}
          tipo = {'Ingresso'}
          sobre = {'Um festival inclusivo e estabelece parcerias com entidades que desenvolvem projetos e que possuem conhecimento técnico nesta área, testando sempre as infraestruturas para um melhor serviço para todos.'}
        />  
      </Card>
      <Card style={style.containerCards2}>
        <Cartao 
          navigation={navigation} 
          nome ={'Corinthians x Palmeiras'} 
          logo = {Corinthians}
          data = {'21 Janeiro, 2024'}
          hora = {'Domingo, 16:00'}
          curto = {'Sab, 21 Jan - 16:00'}
          organizador = {'Paulistão'}
          tipo = {'Ingresso'}
          sobre = {'Acompanhe a final do Paulista'}
        />     
      </Card>
    </View>  
  );
};

export default Search;