import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, FlatList, Text } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  } , []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          ListEmptyComponent={<Text>No data found</Text>}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
