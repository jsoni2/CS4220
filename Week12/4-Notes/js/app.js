// Initialize Firebase
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config)


// Initialize our Angular Application
angular.module('notesApp', ['firebase'])
    .controller('NotesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

        let ref = firebase.database().ref().child('notes')

        $scope.notes = $firebaseArray( ref )

        $scope.currentNote = {}

        $scope.newNote = function(){
           $scope.notes.$add({ title: 'Untitled', body: ''})
        }
        $scope.setCurrentNote = function(note){
            $scope.currentNote = note
        }
        $scope.saveNote = function(){
            $scope.notes.$save($scope.currentNote)
        }

    }])

    