import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, Text, View } from 'react-native';

const Example = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>


      {/* on press down the opacity of the wrapped view is decreased  */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>


      {/* on press down view is darkened or highlighted with color #00FF00  */}
      <TouchableHighlight style={styles.button} onPress={onPress} underlayColor="#00FF00">  
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>


      {/* on press down nothing happens */}
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 30,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default Example;
