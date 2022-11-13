import { View, Text } from '../../Themed';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { character } from '../../../types';

export const Item = ({
  title,
  id,
  navigation,
}: {
  title: string;
  id: number;
  navigation: any;
}) => (
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
