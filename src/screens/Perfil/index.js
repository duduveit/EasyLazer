import React from 'react';
import { auth } from "../../firebase/firebase.config";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, View } from 'react-native';
import { Button, Icon, Text, Avatar } from 'react-native-elements';
import { signOut, updateProfile } from 'firebase/auth';
import style  from '../Perfil/style'
import UploadImage from '../Perfil/UploadImage';


export default function Perfil( {navigation} ) {
  const usuario = auth.currentUser;

  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    });
  }

  function ReplacePassword() {
    navigation.navigate('ReplacePassword');
  }

  function ReplaceName() {
    navigation.navigate('ReplaceName');
  }

  function CadastroEvento() {
    navigation.navigate('CadastroEvento');
  }
  
  function logout() {
    signOut(auth)
      .then(() => {
        Alert.alert("Aviso", "Você desconectou-se do sistema!");
        login();
      })
  }

  return (
    <View style={style.container}>
      <UploadImage/>
      <View>
        <Text style={style.input}>
          {usuario.displayName}
        </Text>
        <Text style={{ left: 225 }} onPress={ReplaceName}>
          Alterar nome
        </Text>
        <Text style={style.input}>
          {usuario.email}
        </Text>
        <Text style={style.input}>
          *************
        </Text>
        <Text style={{ left: 225 }} onPress={ReplacePassword}>
          Alterar senha
        </Text>
      </View>
      <View style={{ marginTop: 30, top: 30}}>
        <Button
          ViewComponent={LinearGradient}
          buttonStyle={{ borderRadius: 10, height: 56, width: 300}}
          linearGradientProps={style.gradiente}
          title="Cadastrar evento"
          onPress={CadastroEvento}
        />
      </View>      
      <View style={{ marginTop: 40, flexDirection: 'row', right: -50, top: 30}}>
        <Text style={{ fontSize: 18, color: '#8B8688', right: 20}}>
          Desconectar-se
        </Text>
        <Icon
          name="logout"
          size={29}
          color="#8B8688"
          onPress={logout}
        />
      </View>
    </View>
  )
};