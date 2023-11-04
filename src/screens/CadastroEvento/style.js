import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logoInicio: {
      top:-60,
      width: 150,
      height: 150,
      margin:-25
   },
   logoCadastro: {
    top: -12,
    width: 100,
    height: 100,
    margin:-25
   },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
    gradiente: {
      colors: ["#FF6A13", "#F1C400"],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
   },
  });

  export default styles