import React, { useState } from 'react';
import { View, Image, Alert} from 'react-native'; // Importe a tag Image corretamente
import { Button, Icon, Input, Text, CheckBox } from 'react-native-elements';
import styles from '../../../style/MainStyle';
import logo from '../../../assets/icon.png'; // Importe a imagem corretamente
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

export default function Cadastro({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [isSelect,setSelect] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorSelect, setErrorSelect] = useState(null);

  const validar = () => {
    setErrorEmail(null);
    setErrorName(null);
    setErrorCpf(null);
    setErrorPassword(null);
    setErrorSelect(null);

    if (!name || !/^[A-Za-z\s]+$/i.test(name)) {
      setErrorName("Preencha seu nome corretamente");
      return false;
    }
  
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente");
      return false;
    }
  
    if (!cpf || !/^\d{11}$/.test(cpf)) {
      setErrorCpf("11 números são requeridos");
      return false;
    }
  
    if (!password || password.length < 4) {
      setErrorPassword("Mínimo 4 caracteres são requeridos");
      return false;
    }

    if (!isSelect){
      setErrorSelect("Confirme os termos de contrato")
      return false
    }
    return true;
  }

  const cadastrar = () => {
    if (validar()){
      login()
    }
  }

  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    });
  }

  function newUser(){
    createUserWithEmailAndPassword(auth, email, password)
      .then((UserCredential) => {
        const user = UserCredential.user;
        Alert.alert('O usuário ' + email + ' foi criado. Realize o Login');
        login();
      })
      .catch((error) => {
        const errorMessage = error.Message;
        Alert.alert('Falha na criação de usuário', 'Preenche seus dados corretamente!')
      })

  }

  return (
    < View style={styles.container}>
      <Image style={styles.logoCadastro} source={logo} />
      <Text style ={{fontSize: 30, textAlign: 'center', margin: 10, fontWeight: 'bold'}}> Crie sua conta!</Text>
  
      <Input
        placeholder="Nome"
        leftIcon={{ type: 'font-awesome', name: "user"}}
        onChangeText={value => {
          setName(value)
          setErrorName(null)
          }
        }
        errorMessage={errorName}
      />
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' , size: 16}}
        onChangeText={value => {
          setEmail(value)
          setErrorEmail(null)
          }
        }
        keyboardType="email-address"
        errorMessage={errorEmail}
      />
      <Input
        placeholder="CPF"
        leftIcon={{ type: 'font-awesome', name: 'id-card', size: 13}}
        onChangeText={value => {
          setCpf(value)
          setErrorCpf(null)
          }
        }
        keyboardType="number-pad"
        returnKeyType='done'
        errorMessage={errorCpf}
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => {
          setPassword(value)
          setErrorPassword(null)
          }
        }
        secureTextEntry={true}
        errorMessage={errorPassword}
      />
      
      <CheckBox
        title="Eu aceito os termos de uso"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor='green'
        uncheckedColor='red'
        checked={isSelect}
        onPress={() => {
          setSelect(!isSelect)
          setErrorSelect(null)
          }
        }
      >
      </CheckBox>
      <View style = {{top: 20}}>
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
        title="Cadastrar"
        onPress={newUser}
      >
      </Button>
      </View>
      <Text style ={{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#8B8688'}}> Já possui conta? 
        <Text style = {{fontSize: 16, textAlign: 'center', marginTop: 40, color: '#FF6A13'}} onPress={() => login()}> Entre com sua conta </Text>
      </Text>
    </View>
  );
}
