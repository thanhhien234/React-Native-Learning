import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    // SafeAreaView is used to avoid the content from being hidden by the status bar
    <SafeAreaView style={styles.container}>   

    {/* 1. LongList */}
      {/* <ScrollView style={styles.scrollViewStyle}>
        {
          pokemonList.map((item, index) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}



    {/* 2. FlatList: only render items currently in view */}
      <FlatList 
        data = {pokemonList}
        renderItem={({item}) => {
          // console.log(item.id) 
          return (
            <View style={styles.card}>
              <Text>{item.name}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id.toString()}  // assuming each item has an 'id' property
        ItemSeparatorComponent={() => <View style={{height: 10}} /> }  // add view as a space between items
        ListEmptyComponent={() => <Text>No items to display</Text>}   // if data = {[]} then this will be displayed
        
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        }
        ListFooterComponent={
          <Text style={styles.footerText}>End of list</Text>
        }
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewStyle : {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 10,
  }
});
