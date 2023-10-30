import React, { useState } from 'react';
import { Alert, View, TextInput} from 'react-native';
import styles from '../../../style/MainStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Icon, Text } from 'react-native-elements';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const ReplacePassword = ({ navigation, route }) => {
  const [userEmail, setUserEmail] = useState(null);

  function ReplacePassword(){
    if(userEmail !== null) {
      sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        Alert.alert("Aviso","Foi enviado um email para: " + userEmail + ". Verifique sua caixa de email.");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }]
        });
      })
    } else {
        Alert.alert("Aviso","É preciso informar um email válido para efetuar a redefinição de senha");
        return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#000', fontSize: 30 }}>Redefinição de senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserEmail}
        value={userEmail}
        placeholder="Informe o email"
        keyboardType="email-address"
        autoCapitalize='none'
        autoComplete='email'
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
        title="Enviar"
        onPress={ReplacePassword}
      >
      </Button>
    </View>
  );
};

export default ReplacePassword;