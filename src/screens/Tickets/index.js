import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style'
import { Searchbar, Card } from 'react-native-paper';
import Cartao from '../../components/cartao';
import tardezinha from '../../img/tardezinha.jpg';
import Corinthians from '../../img/Corinthians.png'

const Tickets = ({ navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={style.container}>
      <Card style={style.containerCards}>
        <Cartao 
          navigation={navigation} 
          nome ={'Tardezinha - Neo Química Arena'} 
          logo = {tardezinha}
          data = {'13 Dezembro, 2024'}
          hora = {'Sábado, 17:00 - 21:00'}
          organizador = {'Tardezinha'}
          sobre = {'Um festival inclusivo e estabelece parcerias com entidades que desenvolvem projetos e que possuem conhecimento técnico nesta área, testando sempre as infraestruturas para um melhor serviço para todos.'}
        />  
      </Card>
      <Card style={style.containerCards2}>
        <Cartao 
          navigation={navigation} 
          nome ={'Corinthians x Real Madrid'} 
          logo = {Corinthians}
          data = {'21 Janeiro, 2024'}
          hora = {'Domingo, 8:00'}
          organizador = {'Fifa World Clubs Cup'}
          sobre = {'Em uma batalha épica nos campos neutros do Mundial de Clubes da FIFA, o Corinthians e o Real Madrid enfrentam-se em uma disputa intensa e emocionante.'}
        />     
      </Card>
    </View>  
  );
};

export default Tickets;