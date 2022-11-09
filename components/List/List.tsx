import { Text, View } from "../Themed";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Spinner } from "native-base";
import { fetchAllCharacters } from "../../api/RickApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RootStackScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/native";

const Item = ({ title, id, navigation }: any) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { id: id });
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const List = () => {
  const navigation = useNavigation();
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }: any = useInfiniteQuery(
    ["characters"],
    ({ pageParam }) => fetchAllCharacters({ pageParam }),

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

  const renderItem = ({ item }: any) => (
    <Item navigation={navigation} title={item.name} id={item.id} />
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
    return <Spinner size="lg" />;
  };

  return isLoading ? (
    <View style={styles.container}>
      <Spinner size="lg" />
    </View>
  ) : (
    <View>
      <Text style={styles.header}>List</Text>
      <Divider />
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
    justifyContent: "center",
    alignItems: "center",
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
