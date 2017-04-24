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
    .controller('AuthController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

        let auth = $firebaseAuth()

        // login with Google
        $scope.login = function () {

            auth.$signInWithPopup("google").then(function (firebaseUser) {
                $scope.currentUser = firebaseUser
                console.log("Signed in as:", firebaseUser)
            }).catch(function (error) {
                $scope.error = error
                console.log("Authentication failed:", error)
            })
            
        }

        // logout
        $scope.logout = function () {
            firebase.auth().signOut().then(function () {
                $scope.currentUser = null
                console.log('Signed Out');
                $scope.$apply()
            }, function (error) {
                $scope.error = error
                console.error('Sign Out Error', error);
            })
        }



    }])