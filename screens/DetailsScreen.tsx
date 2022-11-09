import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card/Card";
import { fetchCharacter, useFetchCharacterQuery } from "../api/RickApi";

const DetailsScreen = ({ route }: any) => {
  const { id } = route.params;
  const { isLoading, data } = useFetchCharacterQuery(id);

  return (
    <View>
      <Card character={data} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
