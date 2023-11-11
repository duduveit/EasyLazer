import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imagem: {
      left:-15,
      width: 438,
      height: 200,
      alignItems:'center'
   },
   title: { 
      color: '#000', 
      fontSize: 30, 
      fontWeight:'bold',
      textAlign:'center',
      top: 20
    },
    icons: {
      flexDirection: 'row',
      top: 30,
      left: 300
    },
    date: {
      flexDirection:'row',
      backgroundColor:'#fff',
      width:355,
      left:30,
      top:30,
      alignItems:'center'
    },
    loc: {
      flexDirection:'row',
      backgroundColor:'#fff',
      width:355,
      left:30,
      top:30,
      alignItems:'center'
    },
    user: {
      flexDirection:'row',
      backgroundColor:'#fff',
      width:355,
      left:30,
      top:40,
      alignItems:'center'
    },
    texto: {
      color: '#000', 
      fontSize: 18, 
      fontWeight:'bold',
      textAlign:'justify',
      top: 20
    },
    sobre: {
      top: 15,
      margin: 15,
    },
    botao:{
      top:50,
      alignItems:'center'
    },
    gradiente: {
      colors: ["#FF6A13", "#F1C400"],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
   },

});

export default style