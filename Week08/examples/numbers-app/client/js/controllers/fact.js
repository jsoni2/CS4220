angular
.module('FactCtrl', [])
.controller('FactController', function($scope, FactService) {

  $scope.getMathFact = () => {
    FactService.get({
      type: 'math',
      number: $scope.number,
    }, (response) => {
      if (response.found) {
        $scope.fact = response.type.toUpperCase()+'('+$scope.number+')\n - '+response.text+'\n'
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
        $scope.fact = response.type.toUpperCase()+'('+$scope.number+')\n - '+response.text+'\n'
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
        // let ddmm=new Date(fullDate[0]+' '+fullDate[1])
        // ddmm=ddmm.toString().split(' ')
        // console.log(ddmm);
        // console.log(ddmm.toString().split(' '));
        // let dm = ddmm[1]+' '+ddmm[2]
        // console.log(dm);
        FactService.get({
          type: 'year',
          number: fullDate[2],
          // date: dm
        }, (response) => {
          if (response.found && response.date) {
            // console.log(response.date.toString())
            // let haveDate=response.date.toString()
            $scope.fact = 'DATE'+'('+$scope.number+')\n - '+response.text+'\n'
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
            $scope.fact = response.type.toUpperCase()+'('+$scope.number+')\n - '+response.text+'\n'
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
        $scope.fact = response.type.toUpperCase()+'('+randomNumber+')\n - '+response.text+'\n'
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
        $scope.fact = response.type.toUpperCase()+'('+randomDate+')\n - '+response.text+'\n'
      })
    }
  }
})
