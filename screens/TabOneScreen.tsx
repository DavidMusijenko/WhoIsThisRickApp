/* eslint-disable react/react-in-jsx-scope */
import List from '../components/List/List';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View>
      <List />
    </View>
  );
}
