/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from '../Themed';
import { FlatList, StyleSheet } from 'react-native';
import { Divider, Spinner } from 'native-base';
import { fetchAllCharacters } from '../../api/RickApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { Item } from './Item/Item';
import { character } from '../../types';

const List = () => {
  const navigation = useNavigation();
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

  const renderItem = ({ item }: { item: character }) => (
    <Item navigation={navigation} title={item.name} id={item.id} />
  );

  const itemExtractorKey = (item: character, index: number) => {
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
      />
    </View>
  );
};

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

export default List;
