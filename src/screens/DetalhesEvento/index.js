import React from 'react';
import { Text, View} from 'react-native';
import styles from '../../../style/MainStyle';

const EventDetail = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>Cadastro</Text>
    </View>
  );
};

export default EventDetail;