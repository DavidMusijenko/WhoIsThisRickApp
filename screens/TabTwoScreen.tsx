import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import FastImage from '../components/FastImage/FastImage';
import EditScreenInfo from '../components/_EditScreenInfo';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FastImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
