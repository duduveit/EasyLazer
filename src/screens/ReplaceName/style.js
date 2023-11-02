import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
   },
    caixa: {
        height: 50, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        borderRadius: 10, 
        width:300 ,
        marginTop:50
    },
    confirmacao: {
        fontSize: 15, 
        textAlign: 'center', 
        margin: 10, 
        color: '#8B8688',
        top:20  
    },
    gradiente: {
        colors: ["#FF6A13", "#F1C400"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
    },
    Titulo: {
        fontSize: 28, 
        textAlign: 'center', 
        margin: 5, 
        fontWeight: 'bold',
     },
})

export default style;