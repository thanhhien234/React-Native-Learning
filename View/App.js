import { ScrollView, View, StyleSheet, Text, Image, ImageBackground, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <Text>Text Example</Text>
      <View style={{ width: 100, height: 100, backgroundColor: 'purple' }} />

      {/* Image */}
      <Image source={require('./assets/icon.png')} style={styles.imgStyle} />
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={styles.imgStyle}
      />



      {/* Image Background */}
      <ImageBackground source={require('./assets/splash.png')} style={styles.backGroundImgStyle}>
        <Text>Image Background</Text>
      </ImageBackground>
      


      {/* Button */}
      <Button title="Click Me" onPress={() => alert('Button Clicked')} disabled/>



      {/* Pressable */}
      <Pressable
        onPress={() => alert('Pressable Clicked')}
        onPressIn={() => console.log('Pressable Pressed In')}
        onPressOut={() => console.log('Pressable Pressed Out')}
        onLongPress={() => alert('Pressable Long Pressed')}
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'lightblue' : 'lightgray' },
          styles.pressable
        ]}
      >
        <Text>Pressable Area</Text>
      </Pressable>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  // container: {   //style for View
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {   //style for ScrollView
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 100,
    height: 100,
  },
  backGroundImgStyle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
