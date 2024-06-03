import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>

      <View style={[styles.box, {
        width: windowWidth > 500 ? "40%" : "80%",
        height: windowHeight > 600 ? "50%" : "30%",
      }]}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    backgroundColor: 'lightblue',
  },
});
