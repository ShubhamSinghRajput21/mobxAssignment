import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('notesStore')
@observer
export default class NotesList extends Component {
  handleLongPress = (id) => {
    Alert.alert('Alert', 'Do you really want to delete item', [
      {
        text: 'Ok',
        onPress: () => this.props.notesStore.deleteNote(id),
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  handlePress = ({id, title, description}) => {
    this.props.navigation.navigate('AddNotes', {
      id: id,
      title: title,
      description: description,
    });
  };

  render() {
    const {notesArray} = this.props.notesStore;
    return (
      <SafeAreaView style={styles.mainContainer}>
        {notesArray.length !== 0 ? (
          notesArray.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemContainer}
                onLongPress={() => this.handleLongPress(item.id)}
                onPress={() => this.handlePress({...item})}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={styles.initialTextContainer}>
            <Text style={styles.centerTxt}>You do not have any notes</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddNotes')}>
          <Text style={styles.btnText}>+ Add New Note</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  initialTextContainer: {flex: 1, justifyContent: 'center'},
  addButton: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#78d6ba',
    padding: 10,
    paddingHorizontal: 20,
    bottom: 40,
    borderRadius: 30,
  },
  btnText: {
    color: 'grey',
    fontSize: 16,
  },
  centerTxt: {
    alignSelf: 'center',
    fontSize: 18,
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
  },
  description: {
    color: 'grey',
  },
});
