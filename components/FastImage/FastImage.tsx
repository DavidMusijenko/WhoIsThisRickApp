import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '../Themed';
import { useNavigation } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchAllCharacters } from '../../api/RickApi';
import { Spinner } from 'native-base';
import { ImageEl } from './ImageEl/ImageEl';
import { Dimensions } from 'react-native';

const FastImage = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }: any = useInfiniteQuery(
    ['characters'],
    async ({ pageParam }) => await fetchAllCharacters({ pageParam }),

    {
      getNextPageParam: (lastPage) => {
        if (lastPage.info?.next !== null) {
          return lastPage.info?.next;
        } else {
          return null;
        }
      },
    }
  );

  console.log(data);

  const renderItem = ({ item }: any) => (
    <ImageEl
      navigation={navigation}
      image={item.image}
      id={item.id}
      name={item.name}
      windowWidth={windowWidth}
    />
  );

  const itemExtractorKey = (item: any, index: number) => {
    return index.toString();
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderSpinner = () => {
    return <Spinner size='lg' />;
  };

  return isLoading ? (
    <View style={styles.container}>
      <Spinner size='lg' />
    </View>
  ) : (
    <View>
      <FlatList
        data={data?.pages?.map((page: any) => page.results).flat()}
        renderItem={renderItem}
        keyExtractor={itemExtractorKey}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
        numColumns={3}
      />
    </View>
  );
};

export default FastImage;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
