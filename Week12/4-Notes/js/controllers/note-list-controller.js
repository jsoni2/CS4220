angular.module('notesApp')
    .controller('NoteListController', ['$firebaseArray', function($firebaseArray){

        let ref = firebase.database().ref().child('notes')

        this.notes = $firebaseArray(ref)

    }])