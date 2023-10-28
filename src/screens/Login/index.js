import React, { useState } from 'react';
import { View, Image, Alert} from 'react-native'; // Importe a tag Image corretamente
import { Button, Icon, Input, Text } from 'react-native-elements';
import styles from '../../../style/MainStyle';
import logo from '../../../assets/icon.png'; // Importe a imagem corretamente
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
    <View style={styles.container}>
      <Image style={styles.logoInicio} source={logo} />
      <Text style ={{fontSize: 30, textAlign: 'center', margin: 10, fontWeight: 'bold'}}> Bem-vindo de volta!</Text>
      <Text style ={{fontSize: 15, textAlign: 'center', margin: 10, color: '#8B8688'}}> Entre com seus dados:</Text>
      
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
        linearGradientProps={{
          colors: ["#FF6A13", "#F1C400"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
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
      
      <Text style ={{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#8B8688'}}> Não possui conta? 
        <Text style = {{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#FF6A13'}} onPress={() => cadastrar()}> Cadastre </Text>
      </Text>
    </View>
  );
}
