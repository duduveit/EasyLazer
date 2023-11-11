import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cartao( {navigation, nome, logo, data, hora, organizador, sobre} ) {

  function Conferir() {
    navigation.navigate('DetalhesEvento', {nome: nome, logo: logo, data: data, hora: hora, organizador: organizador, sobre:sobre});
  }

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.rectangle}>
        <View style={styles.title}>
          <Text style={{fontSize: 15, textAlign: 'left',  fontWeight: 'bold'}}>
            {nome}
          </Text>
        </View>
        <View style={styles.title}>
          <Icon
            name="place"
            size={29}
            color="#8B8688"
          />
          <Text style={{fontSize: 13, textAlign: 'center', margin: 10,  fontWeight: 'bold'}}>
            São Paulo
          </Text>
          <Button
            ViewComponent={LinearGradient}
            buttonStyle={{borderRadius:5, alignSelf:'center'}}
            style = {{width:100, left: 10}}
            linearGradientProps={styles.gradiente}
            title="Detalhes"
            onPress={Conferir}
          />
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    borderRadius:50
  },
  container: {
    margin:4,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  square: {
    width: 100,
    height: 100,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rectangle: {
    width: 231,
    height: 100,
    margin: 4,
  },
  title: {
    width: 231,
    height: 50,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  gradiente: {
    colors: ["#FF6A13", "#F1C400"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
 },
});
