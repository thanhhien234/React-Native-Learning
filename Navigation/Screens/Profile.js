import { View, Text, Button } from 'react-native';

function Profile({ route, navigation }) {
  const { name } = route.params;
  return (
    <View>
      <Text>Profile Screen: Received name = {name}</Text>
      <Button title='Update name'
        onPress={() => navigation.setParams({    //update "name", send "result" to Home screen
          name: 'Updated name'
        })} />
      <Button title='Go back' onPress={() => navigation.navigate("Home",{result:name})} />
    </View>
  );
}
export default Profile;