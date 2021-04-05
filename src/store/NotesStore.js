import {action, computed, makeObservable, observable} from 'mobx';

class NotesStore {
  constructor() {
    makeObservable(this);
  }
  @observable notesArray = [];

  @action
  addNote(value) {
    this.notesArray[value.id] = value;
  }

  @action
  deleteNote(id) {
    this.notesArray.splice(id, 1);
  }
}

export default NotesStore;
