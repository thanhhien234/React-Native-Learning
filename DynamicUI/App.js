import { StyleSheet, Text, View, Platform } from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Different styles for different platforms</Text>
      <CustomButton title="Press me" onPress={() => alert("Button pressed")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,  //set paddingTop only for Android
  },
  text: {
    ...Platform.select({  //different styles for different platforms
      ios: {
        color: 'blue',
      },
      android: {
        color: 'green',
      },
    }),
    fontSize: 20,
  }
});
