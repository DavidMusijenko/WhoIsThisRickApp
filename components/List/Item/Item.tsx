import { View, Text } from '../../Themed';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const Item = ({ title, id, navigation }: any) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', { id });
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
