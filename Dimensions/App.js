import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function App() {

  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window });
    });
    console.log("Dimensions:", dimensions);
    return () => subscription?.remove();
  }
  , [dimensions]);

  return (
    <View style={styles.container}>

      <View style={[styles.box, {
        width: dimensions.window.width > 500 ? "40%" : "80%",
        height: dimensions.window.height > 600 ? "50%" : "30%",
      }]}>
      </View>

    </View>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// console.log("width:",windowWidth, " , height:", windowHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    // width: windowWidth > 500 ? "40%" : "80%",
    // height: windowHeight > 600 ? "50%" : "30%",
    backgroundColor: 'lightblue',
  },
});
