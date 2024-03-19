import React from 'react-native'
import {View, Text, StyleSheet} from 'react-native'
import ComponenteCalendario from './components/calendariocp';
import BotaoAdicionar from './components/BotaoAdicionar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from '../calendarioativo/SecondScreen';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="SegundaTela"
          component={SecondScreen}
          options={{ title: 'Segunda Tela' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Desenvolvendo um Aplicativo</Text>
      <BotaoAdicionar
        title="Adicionar"
        onPress={() => navigation.navigate('SegundaTela')}
      />
      <ComponenteCalendario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});