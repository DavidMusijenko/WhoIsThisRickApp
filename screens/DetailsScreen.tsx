/* eslint-disable react/react-in-jsx-scope */
import { View } from '../components/Themed';
import Card from '../components/Card/Card';
import { fetchCharacter, useFetchCharacterQuery } from '../api/RickApi';

const DetailsScreen = ({ route }: any) => {
  const { id } = route.params;
  const { data } = useFetchCharacterQuery(id);

  return (
    <View>
      <Card character={data} />
    </View>
  );
};

export default DetailsScreen;
