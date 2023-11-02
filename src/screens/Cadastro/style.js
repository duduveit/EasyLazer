import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
   },
   logoCadastro: {
      top: -12,
      width: 150,
      height: 150,
      margin:-25
      },
   criarConta: {
      fontSize: 30, 
      textAlign: 'center', 
      margin: 10, 
      fontWeight: 'bold'
   },
   textoPossui: {
      fontSize: 16, 
      textAlign: 'center', 
      marginTop: 40, 
      color: '#8B8688'
   },
   textoCadastro: {
      fontSize: 16, 
      textAlign: 'center', 
      marginTop: 40, 
      color: '#FF6A13'
   },
   gradiente: {
      colors: ["#FF6A13", "#F1C400"],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
   },
});

export default style