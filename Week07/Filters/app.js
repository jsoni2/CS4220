angular.module('myFilterApp', [])
    .filter('leetTalk', function() {
        return function(input, capitalize) {
            
            input = input || ''
            input = input.toLowerCase()

            let out = input.replace(/f/g, 'ph')
                            .replace(/a/g, '4')
                            .replace(/e/g, '3')
                            .replace(/l/g, '1')
                            .replace(/o/g, '0')
                            .replace(/s/g, 'z')


            // conditional based on optional argument
            if (capitalize)
                out = out.toUpperCase();            
            
            return out;
        }
    })
    
    .controller('MyFilterController', ['$scope', 'filterFilter', 'leetTalkFilter', function($scope, filterFilter, leetTalkFilter) {

        // When we want to use a filter within a controller, we must
        //   inject it.  This is why we are passing in `filterFilter`
        // The syntax is <filterName>Filter.  This gets injected into 
        //   your controller/service/directive. 
        // E.g. a filter called `number` is injected by using 
        //   the dependency `numberFilter`.
        

        $scope.courses = [
            'Current Trends in Web Design',
            'Web and Internet Programming',
            'Introduction to Programming',
            'Object Oriented Programming',
            'Multimedia Systems'
        ]

        // The injected argument (filterFilter) is a function that takes the 
        //   value to format as the first argument, and filter parameters
        //   starting with the second argument.
        $scope.filteredCourses = filterFilter( $scope.courses, 'Web')


        

    }])
