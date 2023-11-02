import React from 'react';
import { Text, View} from 'react-native';
import styles from '../../../style/MainStyle';

const DetalhesEvento = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>Tickets</Text>
    </View>
  );
};

export default DetalhesEvento;