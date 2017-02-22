### Week 1 Homework (100 pts) - Due 02/05/17 at 11:59pm

Complete all the problems below.

- Output your answers to the console using this format.

```
      Question 1
      olleh
      dlrow
      
      Question 2
      j*v*scr*pt
      *ng*l*r
      
      .. etc
```

- Use ES6 syntax as much as possible.  Make sure you are using let/const properly.  Absoultely NO use of var.

- Use proper indentation or formatting.  Incorrect formatting/indentation will lose some points.

- Do NOT use any Array or Object methods (ex. Array.reverse(), Object.keys(), etc)

##### 1. Write a function that takes a string and reverses it. (15 pts)
    reverseWord('hello') // olleh
    reverseWord('world') // dlrow


##### 2.  Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with * (15 pts)
    replaceVowels('javascript') // j*v*scr*pt
    replaceVowels('angular')    // *ng*l*r


##### 3. Write a function that finds letters in the array and outputs their occurances as an object.  The key is the letter and the count is the value. (15 pts)
    countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])
    // { z: 2, y: 4, x: 2, w: 1, u: 1 }


##### 4.  Write a function that creates two new arrays odds and evens. (15 pts)
    oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ])
    // odds = [ 21, 99, 43, 1 ]
    // evens = [ 8, 2, 48, 82 ]

##### 5. Write a function that averages all the numbers including string value numbers in an array. Using the parseInt() method is allowed. (15 pts)
    averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }])
    // 20


##### 6.  Write a function that takes an array of cars and a markup percent. Return an object which contains the total markup of all cars and an array of cars with their name as the key and the value as the calculated markup.  Using the push() method is allowed. (25 pts)

    const cars = [
      { type: 'hybrid', wholesale: 25000 },
      { type: 'minivan', wholesale: 28000 },
      { type: 'sedan', wholesale: 31500 },
      { type: 'convertible', wholesale: 45750 }
    ]
    markupValue(cars, 10.5)

    //
    { cars:
       [ { hybrid: 27625 },
         { minivan: 30940 },
         { sedan: 34807.5 },
         { convertible: 50553.75 } ],
      total: 13676.25 }




