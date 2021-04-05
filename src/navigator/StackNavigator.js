import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNotes from '../screens/AddNotes';
import NotesList from '../screens/NotesList';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#78d6ba',
            },
            headerTitleStyle: {
              color: 'grey',
              fontSize: 20,
            },
          }}
          initialRouteName={'NotesList'}>
          <Stack.Screen
            name="NotesList"
            component={NotesList}
            options={{title: 'Simple Note Taker'}}
          />
          <Stack.Screen
            name="AddNotes"
            component={AddNotes}
            options={({navigation}) => {
              return {
                title: 'Add notes',
                headerLeft: () => null,
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="closecircle" size={26} color="grey" />
                  </TouchableOpacity>
                ),
                headerRightContainerStyle: {
                  paddingRight: 10,
                },
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
