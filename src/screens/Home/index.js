import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../../style/MainStyle';

export default Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('DetalhesEvento');
        }}
        title="Vá para os detalhes do evento"
      />
    </View>
  );
};
