angular
.module('FactCtrl', [])
.controller('FactController', function($scope, FactService) {

  $scope.getMathFact = () => {
    FactService.get({
      type: 'math',
      number: $scope.number,
    }, (response) => {
      if (response.found) {
        $scope.fact = response
      }
      else {
        $scope.fact = ''
      }
    })
  }
  $scope.getTriviaFact = () => {
    FactService.get({
      type: 'trivia',
      number: $scope.number,
    }, (response) => {
      if (response.found) {
        $scope.fact = response
      }
      else {
        $scope.fact = ''
      }
    })
  }
  $scope.getDateFact = () => {
    if (typeof $scope.number==='undefined') {
      return
    }
    else {
      let fullDate=$scope.number.split('/')
      if (fullDate[2]) {
        FactService.get({
          type: 'year',
          number: fullDate[2],
        }, (response) => {
          if (response.found) {
            $scope.fact = response
            $scope.fact.number=$scope.number
            $scope.fact.type='date'
          }
          else {
            $scope.fact = ''
          }
        })
      }
      else {
        FactService.get({
          type: 'date',
          number: $scope.number,
        }, (response) => {
          if (response.found) {
            $scope.fact = response
            $scope.fact.number=$scope.number
          }
          else {
            $scope.fact = ''
          }
        })
      }
    }
  }
  $scope.getRandomFact = () => {
    const randomTypes=['math','trivia','date']
    let randomType=randomTypes[Math.floor(Math.random()*randomTypes.length)]
    if (randomType!=='date') {
      let randomNumber=Math.floor(Math.random() * 100) + 1
      FactService.get({
        type: randomType,
        number: randomNumber,
      }, (response) => {
        $scope.fact = response
      })
    }
    else {
      let randomMonth=Math.floor(Math.random() * 12) + 1
      let randomDay=Math.floor(Math.random() * 31) + 1
      let randomDate=randomMonth+'/'+randomDay
      FactService.get({
        type: 'date',
        number: randomDate,
        //random: true
      }, (response) => {
        $scope.fact = response
        $scope.fact.number=randomDate
      })
    }
  }
})
