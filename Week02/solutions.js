// QUESTION 1 //
const reverseWord = (str) => {
    const reversed = str.split('').reverse().join('')
    console.log(reversed)
}
reverseWord('hello') // olleh
reverseWord('world') // dlrow


// QUESTION 2 //
const replaceVowels_v1 = (str) => {
    const
        arr = str.split(''),
        replaced = arr.map((letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
            return '*'
        else
            return letter
    })

    console.log(replaced.join(''))
}
replaceVowels_v1('javascript') // 'j*v*scr*pt'
replaceVowels_v1('angular') // *ng*l*r


const replaceVowels_v2 = (str) => {
    const replaced = str.replace(/[aeiou]/g, '*')
    console.log(replaced)
}
replaceVowels_v2('javascript') // 'j*v*scr*pt'
replaceVowels_v2('angular') // *ng*l*r


// QUESTION 3 //
class Calculator {
    constructor(total = 0) {
        this.total = total
    }

    add(n) {
        this.total += n
        return this
    }

    substract(n) {
        this.total -= n
        return this
    }

    multiply(n) {
        this.total *= n
        return this
    }

    divide(n) {
        this.total /= n
        return this
    }

    clear() {
        this.total = 0
        return this
    }

    get print() {
        console.log('total is: ' + this.total)
        return this
    }
}

const calculator_v1 = new Calculator(2)

calculator_v1
    .multiply(3)
    .add(10)
    .divide(2)
    .substract(4)
    .print // 4
    .clear()
    .print // 0

const calculator_v2 = new Calculator()
calculator_v2
    .multiply(3)
    .add(10)
    .divide(2)
    .substract(4)
    .print // 1
    .clear()
    .print // 0


// QUESTION 4 //
const media_array = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
const convertToObject = (arr) => {
    const obj = {}
    arr.forEach(([ key, value ]) => {
        obj[key] = value
    })
    console.log(obj)
}
convertToObject(media_array)
// { media: 'facebook', company: 'github', likes: 58445 }


// QUESTION 5 //
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
const convertToArray_v1 = (obj) => {
    const arr = Object.entries(obj)
    console.log(arr)
}
convertToArray_v1(media_obj)

const convertToArray_v2 = (obj) => {
    const
        arr = [],
        keys = Object.keys(obj)
    keys.forEach((key) => {
        arr.push([ key, obj[key] ])
    })
    console.log(arr)
}
convertToArray_v2(media_obj)
// [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]



