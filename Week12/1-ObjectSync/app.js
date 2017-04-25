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

angular.module('fbApp', ['firebase'])
    .controller('SyncController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

        let ref = firebase.database().ref().child("syncDemoData")

        $scope.data = $firebaseObject(ref)

        // download the data into a local object
        let syncObject = $firebaseObject(ref);

        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "threeWayData")

    }])