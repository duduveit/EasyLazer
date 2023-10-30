import React from 'react';
import { auth } from "../../firebase/firebase.config";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, View } from 'react-native';
import { Button, Icon, Text, Avatar } from 'react-native-elements';
import styles from '../../../style/MainStyle';
import { signOut } from 'firebase/auth';

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

  function logout() {
    signOut(auth)
      .then(() => {
        Alert.alert("Aviso", "Você desconectou-se do sistema!");
        login();
      })
  }
  return (
    <View style={styles.container}>
      <Avatar
        size={200}
        title="Eduardo Veit Ferrão"
        rounded
        source={{
          uri: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
        }}
      />
      <View>
        <Text style={styles.input}>
          usuario
        </Text>
        <Text style={styles.input}>
          {usuario.email}
        </Text>
        <Text style={styles.input}>
          senha
        </Text>
        <Text style={{ left: 225 }} onPress={ReplacePassword}>
          Alterar senha
        </Text>
      </View>
      <View style={{ marginTop: 30, top: 30}}>
        <Button
          ViewComponent={LinearGradient}
          buttonStyle={{ borderRadius: 10, height: 56, width: 300}}
          linearGradientProps={{
            colors: ["#FF6A13", "#F1C400"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          title="Cadastrar evento"
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