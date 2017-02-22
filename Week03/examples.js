// // TIMERS
console.log('Before')
setTimeout(() => {
    console.log('inside the timeout')
}, 10) // in ms
// 1000 ms = 1 sec
console.log('After')

console.log('Before')
let count = 0
const id = setInterval(() => {
    if (count === 5)
        clearInterval(id)
    else
        console.log('repeat')

    count++
}, 10)
console.log('After')


// // CALLBACKS
const foods = [
        { food: 'pizza', time: 3000 },
        { food: 'spaghetti', time: 2000 },
        { food: 'sandwich', time: 1000 }
    ]


const cook = ({food, time}, callback) => {
    setTimeout(() => {
        callback(`${food} is ready`)
    }, time)
}

cook({ food: 'sandwich', time: 3000 }, (result) => {
    console.log(result)
})
cook({ food: 'pizza', time: 3000 }, (result) => {
    console.log(result)
})

const makeFood = (foods) => {
    foods.forEach((food) => {
        cook(food, (result) => {
            console.log(result)
        })
    })
}
makeFood(foods)


// // CALLBACKS WITH ERRORS
const oddEven = (n, callback) => {
    if (n % 2 === 0)
        callback(null, n)
    else
        callback({ error: 'number is odd' })
}

oddEven(3, (err, result) => {
    if (err)
        console.log(err)
    else
        console.log(`${result} is even`)
})

// // PROMISES
const cookAgain = ({food, time}) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`${food} is ready`)
        }, time)
    })
}
cookAgain({ food: 'pizza', time: 3000 })
    .then((result) => {
        console.log(result)
    })

cookAgain({ food: 'sandwich', time: 1000 })
    .then((result) => {
        console.log(result)
    })

// LOOP PROMISES
const makeFoodAgain = (foods) => {
    foods.forEach((food) => {
        cookAgain(food)
            .then((result) => {
                console.log(result)
            })
    })
}
makeFoodAgain(foods)

// // PROMISE ALL
const makeAllFoods = (foods) => {
    const promises = foods.map((food) => {
        return cookAgain(food)
    })

    Promise.all(promises)
        .then((results) => {
            console.log(results)
        })
}
makeAllFoods(foods)


// // PROMISES WITH REJECTIONS
const oddEvenAgain = (n) => {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0)
            resolve(`resolved: ${n}`)
        else
            reject(`rejected: ${n}`)
    })
}

oddEvenAgain(3)
    .then((result) => {
        console.log(result)
    })
    .catch((result) => {
        console.log(result)
    })


const numbers = [2, 4, 5, 8, 10]
const allNumbers = (numbers) => {
    const promises = numbers.map((n) => {
        return oddEvenAgain(n).catch((err) => {
            return err
        })
    })

    Promise.all(promises)
        .then((results) => {
            console.log(results)
        })

}
allNumbers(numbers)

















