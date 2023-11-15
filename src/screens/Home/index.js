import React from 'react';
import { Text, View, Button } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import style from '../Home/style';
import dança from '../../img/dança.png';
import Workshop from '../../img/Workshop.png';
import Maratona from '../../img/Maratona.png';
import Cartao from '../../components/cartao';

export default Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const navigateToResults = () => {
    // Navigate to the 'Results' screen with the searchQuery parameter
    navigation.navigate('Busca');
  };

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold', top: 10 }}>Localização</Text>
      <View style={style.loc}>
        <Icon
              name="place"
              size={29}
              color="#F1C400"
        />
        <Text style={{ fontSize: 13, textAlign: 'center', margin: 10, fontWeight: 'bold' }}>
          São Paulo
        </Text>
      </View>
      <Searchbar
        placeholder="Buscar"
        theme={{ colors: { primary: 'green' } }}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ top: 5 }}
        iconColor='#F1C400'
        onIconPress={navigateToResults}
      />
      <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold', top: 10 }}> Eventos próximos </Text>
      <Card style={{top:18}}>
        <Cartao 
          navigation={navigation} 
          nome ={'Tardezinha - Neo Química Arena'} 
          logo = {dança}
          data = {'13 Dezembro, 2024'}
          hora = {'Sábado, 17:00 - 21:00'}
          curto = {'Sab, 13 Dez - 17:00 - 21:00'}
          organizador = {'Tardezinha'}
          tipo = {'Detalhes'}
          sobre = {'Um festival inclusivo e estabelece parcerias com entidades que desenvolvem projetos e que possuem conhecimento técnico nesta área, testando sempre as infraestruturas para um melhor serviço para todos.'}
        />  
      </Card>
      <Card style={{top:30}}>
        <Cartao 
          navigation={navigation} 
          nome ={'Costura Inclusiva'} 
          logo = {Workshop}
          data = {'19 Novembro, 2022'}
          hora = {'Domingo, 16:00'}
          curto = {'Dom, 19 Nov - 16:00'}
          organizador = {'Universidade Presbiteriana Mackenzie'}
          tipo = {'Detalhes'}
          sobre = {'Explore o fascinante mundo da costura de maneira inclusiva neste workshop. Este evento é especialmente projetado para pessoas com diferentes habilidades físicas, proporcionando um ambiente acolhedor e adaptado para todos'}
        />     
      </Card>
      <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold', top: 40 }}> Popular no momento </Text>
      <Card style={{top:50}}>
        <Cartao
          navigation={navigation} 
          nome ={'Maratona - Terceira Idade'} 
          logo = {Maratona}
          data = {'17 dezembro, 2023'}
          hora = {'Domingo, 16:00'}
          curto = {'Dom, 17 Dez - 16:00'}
          organizador = {'Mackenzie'}
          tipo = {'Detalhes'}
          sobre = {'Venha participar de uma jornada emocionante e saudável na "Maratona da Terceira Idade". Este evento especial é dedicado a celebrar a vitalidade, a determinação e a sabedoria. Prepare-se para uma experiência única, repleta de atividades físicas, entretenimento e camaradagem.'}
        />     
      </Card>
    </View>
  );
};
