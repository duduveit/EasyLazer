import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import style from '../ReplaceName/style'
import { Input, Button} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth, updateProfile } from "firebase/auth";

const ReplacePicture = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);


  function updateUser(photo){
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      photoURL: photo
    }).then(() => {
        Alert.alert("Foto de perfil alterado com sucesso");
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
          });
    }).catch(() => {
      console.log("Erro");
    });
  }

  return (
    <View style = {style.container}>
      <Text style ={style.Titulo}> Alterar foto de perfil</Text>
      <Text style ={style.confirmacao}> A alteração só será validada após o usuário desconectar!</Text>
      <View style={style.caixa}>
        <TextInput
          placeholder="Nome de usuário"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={value => {
            setName(value)
          }}
        
        />
      </View>
      
      <View style={ {top: 100}}>
        <Button
          ViewComponent={LinearGradient}
          buttonStyle={{ borderRadius: 10, height: 56, width: 300}}
          linearGradientProps={style.gradiente}
          title="Confirmar"
          onPress={() => updateUser(photo)}
        >
        </Button>
      </View>   
    </View>
  )
};

export default ReplacePicture;