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

angular.module('fbApp', ['firebase', 'angularMoment'])
    .controller('SyncController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

        let ref = firebase.database().ref().child("guestbook")

        $scope.posts = $firebaseArray(ref)        

        $scope.addPost = function(){

            $scope.posts.$add({
                message: $scope.message,
                date: new Date().toUTCString()
            })

            $scope.message = ''
        }

        $scope.removePost = function(post){
            $scope.posts.$remove(post);
        }


    }])