import { View, Text, Button } from 'react-native';

export default function Home({  route, navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Updated name = {route.params?.result}</Text>   {/* receive "result" from Profile screen */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Thanh Hien'})}  //send "name" to Profile screen
      />
    </View>
  );
}
