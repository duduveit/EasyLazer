import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
   },
    containerphoto:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    input: {
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        borderRadius: 10, 
        width:300 
        },
    gradiente: {
        colors: ["#FF6A13", "#F1C400"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})

export default style;