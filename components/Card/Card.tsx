/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import { Dimensions } from 'react-native';

const Card = ({ character }: any) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <Image
        style={{ width: windowWidth, height: windowWidth }}
        source={{
          uri: character?.image,
        }}
      />
      <Text style={styles.title}>{character?.name}</Text>

      <Text style={styles.item}>
        {character?.status} {character?.species}
      </Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Text style={styles.location}> Last known location: </Text>
      <Text style={styles.location}>{character?.location.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 0,
    fontSize: 24,
  },
  location: {
    padding: 10,
    fontSize: 24,
  },
  title: {
    fontSize: 40,
    padding: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
