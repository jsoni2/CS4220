// NUMBERS
console.log(parseInt('5'))     // 5
console.log(parseInt('5.5'))   // 5
console.log(parseInt('hello')) // NaN

console.log(parseFloat('5'))     // 5
console.log(parseFloat('5.5'))   // 5.5
console.log(parseFloat('hello')) // NaN

// STRINGS
const str = 'HellO'
console.log(str.toUpperCase())
console.log(str.toLowerCase())

const spaced = '    hello world  '
console.log(spaced.trim())

const greeting = 'hello world'
console.log(greeting.split(''))
console.log(greeting.split(' '))

console.log(greeting.substring(0, 5))
console.log(greeting.substr(0, 5))

// OBJECTS
const pet = {
    type: 'dog',
    breed: 'border collie',
    colors: ['black', 'white']
}

const dog = {
    name: 'Fido',
    colors: ['grey']
}
Object.assign(pet, dog)
console.log(pet)

const keys = Object.keys(pet)
console.log(keys)


// ARRAYS
const alpha = ['a', 'b', 'c']
console.log(alpha.join(','))
console.log(alpha.join(' | '))

const list = [ 'red', 'blue', 'green', 'yellow']
const last = list.pop()
console.log(last)
console.log(list)

const first = list.shift()
console.log(first)
console.log(list)

list.unshift('red')
list.push('yellow')
console.log(list)

list.forEach((color, index) => {
    console.log(color, index)
})

const mappedList = list.map((item, index) => {
    return { [item]: index }
})
console.log(mappedList)

const sliced = list.slice(1, 3)
console.log(list)
console.log(sliced)

const spliced = list.splice(1, 3)
console.log(list)
console.log(spliced)
// adds blue, green, yellow, purple to the array at index 1
list.splice(1, 0, 'blue', 'green', 'yellow', 'purple')

// remove 1 element at index 0
// adds blue, green, yellow, purple to the array at index 0
// list.splice(0, 1, 'blue', 'green', 'yellow', 'purple')
console.log(list)


// DESTRUCTURING
const arr = [ 1, 2, 3, 4 ]
const [ a, b, c, d, e = 5 ] = arr
console.log(a)
console.log(b)
console.log(e)

const fido = {
    type: 'dog',
    breed: 'border collie',
    colors: ['black', 'white']
}

// type is declared as animal
// colors is destructured into c1 and c2
// name is declared as dogName and default set to 'Fido'
const { type: animal, breed, colors: [ c1, c2 ], name: dogName = 'Fido' } = fido
console.log(animal)
console.log(breed)
console.log(c1)
console.log(c2)
console.log(dogName)

const fn = ({ type, breed, colors }) => {
    console.log(type, breed, colors)
}
fn(fido)

// TEMPLATE LITERALS
const foods = [ 'pizza', 'pasta', 'sushi' ]

const foodLoop = (arr) => {
    arr.forEach((item) => {
        console.log(`i ${item === 'sushi' ? 'do not like' : 'like'} ${item}`)
    })
}
foodLoop(foods)


// CLASSES
class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.calcArea()
    }

    calcArea() {
        return this.height * this.width
    }
}
const square = new Polygon(10, 10)
console.log(square.area)
console.log(square.calcArea())



class Todos {
    constructor(list = []) {
        this.list = list
    }

    add({ name, completed = false }) {
        this.list.push({ name, completed })
        return this
    }

    check(task) {
        const found = this.list.find((item) => {
            return item.name.toLowerCase() === task.toLowerCase()
        })

        if (found)
            found.completed = !found.completed

        return this
    }

    get show() {
        this.list.forEach((item) => {
            console.log(`| TASK ${item.name} \n -- COMPLETED: ${item.completed ? 'yes' : 'no'}`)
        })

        return this
    }
}

const todo = new Todos()
todo
    .add({ name: 'do homework' })
    .add({ name: 'walk fido' })
    .check('Do Homework')
    .show




















