import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider, Select, SelectItem} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

interface WithNavProps {
  navigation?: {
    navigate?: (routeName: string) => void;
    popToTop?: () => void;
  };
}

const HomeScreen = ({navigation}: WithNavProps) => (
  <View style={styles.container}>
    <Text style={styles.marginBottom}>Home Screen</Text>
    <Button title="Next" onPress={() => navigation?.navigate?.('Second')} />
  </View>
);
const SecondScreen = ({navigation}: WithNavProps) => (
  <View style={styles.container}>
    <Text style={styles.marginBottom}>Second Screen</Text>
    <Select style={styles.marginBottom}>
      <SelectItem title="One" />
      <SelectItem title="Two" />
      <SelectItem title="Three" />
    </Select>
    <Button title="Next" onPress={() => navigation?.navigate?.('Third')} />
  </View>
);
const ThirdScreen = ({navigation}: WithNavProps) => (
  <View style={styles.container}>
    <Text style={styles.marginBottom}>Third Screen</Text>
    <Button title="Go to Home" onPress={() => navigation?.navigate?.('Home')} />
  </View>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
          <Stack.Screen name="Third" component={ThirdScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  marginBottom: {marginBottom: 8},
});
