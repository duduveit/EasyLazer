import React, { useState } from 'react';
import { View, Image } from 'react-native'; // Importe a tag Image corretamente
import { Button, Icon, Input, Text } from 'react-native-elements';
import styles from '../../../style/MainStyle';
import logo from '../../../assets/icon.png'; // Importe a imagem corretamente
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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

  return (
    <View style={styles.container}>
      <Image style={styles.logoInicio} source={logo} />
      <Text style ={{fontSize: 30, textAlign: 'center', margin: 10, fontWeight: 'bold'}}> Bem-vindo de volta!</Text>
      <Text style ={{fontSize: 15, textAlign: 'center', margin: 10, color: '#8B8688'}}> Entre com seus dados:</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
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
        onPress={() => entrar()}
      >
      </Button>
      <Text style ={{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#8B8688'}}> Não possui conta? 
        <Text style = {{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#FF6A13'}} onPress={() => cadastrar()}> Cadastre </Text>
      </Text>
    </View>
  );
}
