import { Text } from '../../Themed';
import FastImage from 'react-native-fast-image';
import { Image } from 'native-base';
import { TouchableOpacity } from 'react-native';

export const ImageEl = ({
  image,
  id,
  navigation,
  name,
  windowWidth,
}: {
  image: string;
  id: number;
  navigation: any;
  name: string;
  windowWidth: number;
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id })}>
      <Image
        style={{ width: windowWidth / 3, height: windowWidth / 3 }}
        source={{
          uri: image,
        }}
        alt={name}
      />
    </TouchableOpacity>
  );
};
