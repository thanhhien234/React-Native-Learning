import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, FlatList, Text, ActivityIndicator, TextInput, Button } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);  //for GET

  const [loading, setLoading] = useState(true); //loading when waiting data
  const [refreshing, setRefreshing] = useState(false); //refreshing when pull down

  const [postTitle, setPostTitle] = useState('');  //for POST
  const [postBody, setPostBody] = useState('');
  const [isPost, setIsPost] = useState(false);


  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }

  const addPost = async () => {
    setIsPost(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newPost = await response.json();
      setPosts([newPost,...posts]);  //add to the top of the list
      setPostTitle("");
      setPostBody("");
      setIsPost(false);
    } catch (error) {
      console.error("Error adding new Pokémon:", error);
      setError("Failed to add new Pokémon.");
    }
    setIsPost(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="postTitle"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="postBody"
          value={postBody}
          onChangeText={setPostBody}
        />
        <Button
          title={isPost ? "Adding..." : "Add Post"}
          onPress={addPost}
          disabled={isPost}
        />
      </View>

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
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            fetchData(30);
            setRefreshing(false);
          }}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
