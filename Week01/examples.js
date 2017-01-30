// Declaration

// var count = 1
// var count = 2

// let count = 1
// count = 2

// const count = 1
// count = 2
// count++
// console.log(count)

let value = 'hey'
function getWithLet(flag) {
    if (flag) {
        let value = 'hello'
        return value
    }
    else {
        let value = 'howdy'
        return value
    }
}
console.log(getWithLet(true))
console.log(getWithLet(false))

// Type Conversion
console.log(8 * null)
console.log('5' - 1)
console.log('5' + 1)
console.log('five' * 2)

console.log('2' == 2)
console.log(false == 0)

console.log('2' === 2)
console.log(false === 0)

// // GOTCHAS
console.log(undefined == false)
console.log(null == false)


// FUNCTIONS
function addTwo(n) {
    return n + 2
}
console.log(addTwo(2))

const addThree_v1 = function(n) {
    return n + 3
}
console.log(addThree_v1(2))

const addThree_v2 = (n) => {
    return n + 3
}
console.log(addThree_v2(2))

const addThree_v3 = (n) => n + 3
console.log(addThree_v3(2))

// FIZZBUZZ
// Write a function that prints integers from 1 to 30

// BUT
    //    for multiple of 3 print 'Fizz'
    //    for multiples of 5 print 'Buzz'
    //    for multiples of 3 and 5 print 'FizzBuzz'

 const fizzBuzz = () => {
    for (let i = 1; i <= 30; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
 }
fizzBuzz()

// Objects
const transformer = {
    name: 'Optimus Prime',
    teams: 'Autobots',
    colors: ['red', 'blue', 'white'],
    example: {
        nested: true
    }
}
transformer.homeWorld = 'Cybertron'
transformer['vehicle'] = 'truck'
console.log(transformer)

const
    name = 'Cydney',
    anything = 'job',
    val = 'software engineer'

const person = { name, [anything]: val }
console.log(person)


// Arrays
const alpha = [ 'a', 'b', 'c', 1, 3.545435, { a: 'b'} ]
alpha.push('d')
console.log(alpha)

function findLargest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
const values = [2, 5, 8, 9, 232, 9, 6]
console.log(findLargest(values))































































