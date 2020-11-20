import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/contatos';
import Texto from './pages/texto'
import Location from './pages/Location';

const Tab = createBottomTabNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component={Contatos} />
        <Tab.Screen name="Texto" component={Texto} />
        <Tab.Screen name="Localização" component={Location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
