import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {inject, observer} from 'mobx-react';

@inject('notesStore')
@observer
export default class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      description: '',
    };
  }

  handleSubmit = () => {
    const data = {
      id:
        this.state.id !== null
          ? this.state.id
          : this.props.notesStore.notesArray.length,
      title: this.state.title,
      description: this.state.description,
    };
    this.props.notesStore.addNote(data);
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'NotesList'}],
    });
  };

  componentDidMount() {
    if (this.props.route.params) {
      this.setState({
        id: this.props.route.params.id,
        title: this.props.route.params.title,
        description: this.props.route.params.description,
      });
    }
  }
  render() {
    const {title, description} = this.state;
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Add Title Here"
          onChangeText={(text) => this.setState({title: text})}
        />
        <TextInput
          style={styles.inputBig}
          value={description}
          placeholder="Add description here"
          onChangeText={(text) => this.setState({description: text})}
          multiline={true}
        />
        <TouchableOpacity style={styles.addButton} onPress={this.handleSubmit}>
          <Icon name="checkcircle" size={40} color="#78d6ba" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  input: {
    backgroundColor: '#dedede',
    margin: 20,
    padding: 10,
    fontSize: 20,
  },
  inputBig: {
    backgroundColor: '#dedede',
    marginHorizontal: 20,
    padding: 10,
    fontSize: 20,
    height: 200,
  },
});
