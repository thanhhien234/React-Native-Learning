//npm install @react-navigation/native 
//npm install @react-navigation/native-stack
//npm install react-native-screens react-native-safe-area-context
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable,Text } from 'react-native';

import Home from './Screens/Home';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={
            {
              title: 'Welcome Home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <Pressable onPress={() => alert('Menu button pressed')}>
                  <Text style={{ color: 'white', marginRight: 10 }}>Menu</Text>
                </Pressable>
              ),
              contentStyle : {
                backgroundColor: "#e8e8e8e"
              }
            }
          
          }/>
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
