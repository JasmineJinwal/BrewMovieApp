import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MovieDetails';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle}/>
        <Stack.Screen name="movieDetails" component={MovieDetails} options={ {headerShown: false}}/>  
        {/* becoz we don't want header on that page */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title:'Movie',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {color:Constants.textColor},
  // headerLeft: () => <Icon name="menu" size={28} color={Constants.textColor}/>,
  // headerRight: () => (<Icon name="search" size={28} color={Constants.textColor}/>
  //),
};
export default App;