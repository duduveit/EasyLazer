import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
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
   input: {
    height: 40, margin: 12, borderWidth: 1, padding: 10, borderRadius: 10, width:300 
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    }
  });

  export default styles