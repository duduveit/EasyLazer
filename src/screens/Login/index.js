import React, { useState } from 'react';
import { View, Image, Alert} from 'react-native'; // Importe a tag Image corretamente
import { Button, Icon, Input, Text } from 'react-native-elements';
import logo from '../../../assets/icon.png'; // Importe a imagem corretamente
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import style from '../Login/style'

export default function Login({ navigation }) {
  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Inicio" }]
    });
  }

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Cadastro" }]
    });
  }

  function userLogin(){
     signInWithEmailAndPassword(auth, userMail, userPassword)
      .then((userCredential) => {
        //const user = userCredential.user;
        //alert("Login efetuado...");
        entrar();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "Credenciais incorretas"
        Alert.alert('Falha na autenticação', 'Usuário e/ou login inválidos. Tente novamente!')
      })
  }

  return (
    <View style={style.container}>
      <Image style={style.logoInicio} source={logo} />
      <Text style ={style.bemVindo}> Bem-vindo de volta!</Text>
      <Text style ={style.entreDados}> Entre com seus dados:</Text>
      
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        keyboardType="email-address"
        value={userMail}
        onChangeText={setUserMail}
      />

      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        value={userPassword}
        onChangeText={setUserPassword}
      />

      <Button
        ViewComponent={LinearGradient}
        buttonStyle={{borderRadius:10}}
        style = {{width:300}}
        linearGradientProps={style.gradiente}
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        //onPress={() => entrar()}
        onPress={userLogin}
      >
      </Button>
      
      <Text style ={style.textoPossui}> Não possui conta? 
        <Text style = {style.textoCadastro} onPress={() => cadastrar()}> Cadastre </Text>
      </Text>
    </View>
  );
}
