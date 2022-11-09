import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { Image } from "react-native";

const Card = ({ character }: any) => {
  return (
    <View>
      <Image
        style={{ width: 350, height: 350 }}
        source={{
          uri: character?.image,
        }}
      />
      <Text>{character?.name}</Text>
      <Text>{character?.status}</Text>
      <Text>{character?.species}</Text>
      <Text>Last known location: {character?.location.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
