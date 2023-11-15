import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    nome: {
      fontSize: 25,
      alignItems:'center', 
      textAlign: 'center',
      justifyContent: 'center', 
      margin: 10, 
      color: '#F1C400'
    },
    data: {
      fontSize: 20,
      alignItems:'center', 
      textAlign: 'center',
      justifyContent: 'center', 
      margin: 10, 
      color: '#F1C400'
    },
    black: {
      backgroundColor:'#000',
      borderRadius: 8,
      height:470,
      margin:10,
      top: 10,
    },
    yellow: {
      backgroundColor:'#F1C400',
      borderRadius: 8,
      height:380,
      width:292,
      margin:30,
      alignContent:'center',
    },
    pedido: {
      fontSize: 20,
      alignItems:'center', 
      textAlign: 'center',
      justifyContent: 'center', 
      top: 40,
      color: '#fff',
      fontWeight:'bold'
    },
    num: {
      fontSize: 20,
      alignItems:'center', 
      textAlign: 'center',
      justifyContent: 'center', 
      top: 60,
      color: '#fff' ,
      fontWeight:'bold'
    }
});

export default style