import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import style from "../ReplacePicture/style";
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updateProfile } from "firebase/auth";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const auth = getAuth();
  const usuario = auth.currentUser;
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    const { uri } = result.assets[0];
    console.log(uri)
    updateProfile(auth.currentUser, {
      photoURL: uri,
    }).then(() => {
        Alert.alert("Foto de perfil alterado com sucesso");
    }).catch(() => {
        console.log("Erro")
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  return (
    <View style={style.container}>
      {usuario.photoURL && <Image source={{ uri: usuario.photoURL }} style={{ width: 200, height: 200 }} />}
      <View style={style.uploadBtnContainer}>
        <TouchableOpacity onPress={pickImage} style={style.uploadBtn} >
          <Text>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
