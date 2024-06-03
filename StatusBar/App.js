import { StyleSheet, Text, View, StatusBar, ActivityIndicator, Alert, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>barStyle: default === black text on IOS , white text on Android</Text>
      <Text>barStyle: dark-content === both black text</Text>
      <Text>barStyle: light-content === both white text</Text>
      <Text>add 'hidden' to hide StatusBar</Text>
      <StatusBar backgroundColor ='lightgreen' barStyle='default' hidden/>


      <ActivityIndicator size='large' color='red'/>
      <ActivityIndicator size='small' color='blue'/>
      <ActivityIndicator size='large' color='green' animating={true}/>


      <Button title="Alert1" onPress={() => Alert.alert('Alert Message')}/>
      <Button title="Alert2" onPress={() => Alert.alert('Alert Title', 'Alert Message')}/>
      <Button title="Alert3" onPress={() => Alert.alert('Alert Title', 'Alert Message', [
        {text: 'Yes', onPress: () => console.log('Yes')},
        {text: 'No', onPress: () => console.log('No')},
      ])}/>
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
});
