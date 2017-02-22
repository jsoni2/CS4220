/*
    In JavaScript we can pass functions around like variables.
    A callback function is given to other code to provide that code with a way to “call us back” later.
    When we use callbacks - there is no need to use a 'return'.
    Notice in example below I do not use 'return'.
    'callback' is not a keyword.  It is a term used to describe a pattern in programming.
/*

/*
    Here we define a function called add.
    The add function takes 3 arguments - n1, n2 and a callback function.
    The add function then adds the numbers to get a total and then
    executes the callsback function with the total passed an an argument.
*/
const add = (n1, n2, callback) => {
    const total = n1 + n2

    // by executing the callback function here it will "call back" to the log function with the result
    callback(total)
}

/*
    Here we define a function called log.
    The log function calls the add function and passes in 3 arguments, n1, n2
    and a function which is the callback.
    The function has a result argument and that result argument represents the total of n1 + n2.
*/
const log = (n1, n2) => {
    add(n1, n2, (result) => {
        console.log(result) // prints 5
    })
}

/*
    Here I call the log function to start the process.
*/
log(2, 3)


