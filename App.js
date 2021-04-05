import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'mobx-react';
import StackNavigator from './src/navigator/StackNavigator';
import NotesStore from './src/store/NotesStore';

export default class App extends Component {
  render() {
    const notesStore = new NotesStore();
    return (
      <Provider notesStore={notesStore}>
        <StackNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
