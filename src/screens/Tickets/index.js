import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style'
import { Searchbar, Card } from 'react-native-paper';
import Ingresso from '../../components/Ingresso';
import tardezinha from '../../img/tardezinha.jpg';
import Corinthians from '../../img/Corinthians.png';
import bingo from '../../img/bingo.png';

const Tickets = ({ navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={style.container}>
      <Text style={style.texto}>
        Eventos
      </Text>
      <Card style={style.containerCards}>
        <Ingresso 
          navigation={navigation} 
          nome ={'Tardezinha - Neo Química Arena'} 
          logo = {tardezinha}
          data = {'13 Dezembro, 2024'}
          hora = {'Sábado, 17:00 - 21:00'}
          curto = {'Sab, 13 Dez - 17:00'}
          tipo = {'Ingresso'}
          organizador = {'Tardezinha'}
          sobre = {'Um festival inclusivo e estabelece parcerias com entidades que desenvolvem projetos e que possuem conhecimento técnico nesta área, testando sempre as infraestruturas para um melhor serviço para todos.'}
        />  
      </Card>
      <Card style={style.containerCards2}>
        <Ingresso 
          navigation={navigation} 
          nome ={'Corinthians x Real Madrid'} 
          logo = {Corinthians}
          data = {'21 Janeiro, 2024'}
          hora = {'Sabado, 16:00'}
          curto = {'Sab, 21 Jan - 16:00'}
          organizador = {'Fifa World Clubs Cup'}
          sobre = {'Em uma batalha épica nos campos neutros do Mundial de Clubes da FIFA, o Corinthians e o Real Madrid enfrentam-se em uma disputa intensa e emocionante.'}
          tipo = {'Avaliar'}
        />     
      </Card>
      <Card style={style.containerCards3}>
        <Ingresso 
          navigation={navigation} 
          nome ={'Bingo Beneficente'} 
          logo = {bingo}
          data = {'27 agosto, 2023'}
          hora = {'Domingo, 13:00'}
          curto = {'Dom, 27 Ago - 13:00'}
          organizador = {'Prefeitura de São Paulo'}
          tipo = {'Avaliar'}
          sobre = {'Organizado para arrecadar fundos em prol de uma causa nobre, este evento social promove a solidariedade enquanto oferece uma experiência emocionante.'}
        />     
      </Card>
    </View>  
  );
};

export default Tickets;