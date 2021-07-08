import React from 'react';
import {View, Text, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/home';
import BotaoHamburguer from './components/botoes/hamburguer';

import {DrawnerContent} from './pages/drawer';
import Details from './pages/details';
import Login from './pages/login';

const Drawer = createDrawerNavigator();

function Feed({ navigation }) {
    return (
            <Icon.Button
                name="menu"
                backgroundColor="#3b5998"
                onPress={() => navigation.openDrawer()}
            >
            </Icon.Button>
    );
  }
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Home></Home>
        <Button
          onPress={() => navigation.goBack()}
          title="Back to feed"
        />
      </View>
    );
  } 
  function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login></Login>
        <Button
          onPress={() => navigation.goBack()}
          title="Back to feed"
        />
      </View>
    );
  }
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Details></Details>
        <Button
          onPress={() => navigation.goBack()}
          title="Back to feed"
        />
      </View>
    );
  }

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            {/* <Drawer.Navigator drawerContent={props => <DrawnerContent/>}> */}
                <Drawer.Screen name="Feed" component={Feed}/>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Login" component={LoginScreen}/>
                <Drawer.Screen name="Details" component={DetailsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer> 
    );
};

export default App;