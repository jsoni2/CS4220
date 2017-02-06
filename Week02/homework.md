### Week 2 Homework - Due 02/12/17 at 11:59pm

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

- Use ES6 syntax. Make sure you are using let/const properly. Use string, object and array methods.

- Absoultely NO use of var.  Do not use a standard for loop ex: (for (let i = 0; i < arr.length; i++))

- Use proper indentation or formatting.  Incorrect formatting/indentation will lose some points.


##### 1. Write a function that takes a string and reverses it. *Use only string or array methods.
    reverseWord('hello') // olleh
    reverseWord('world') // dlrow


##### 2. Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with *Use only string or array methods.
    replaceVowels('javascript') // j*v*scr*pt
    replaceVowels('angular')    // *ng*l*r


##### 3. Write a Calculator Class
The class should optionally accept a number when instantiated. Use default values where applicable.

The class should have the following methods:
- add(): adds a number to the total <br />
- subtract(): subtracts a number from the total <br />
- multiply(): multiplys the total by a number <br />
- divide(): divides the total by a number <br />
- clear(): clears the total <br />
- print: prints the total

```
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
```            


##### 4. Write a Function that takes a 2D array and converts it to an object.  Each item in the array contains an array of only 2 items - the first item is the key and the second is the value
    const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
    convertToObject(media_arr)
    // { media: 'facebook', company: 'github', likes: 58445 }


##### 5. Write a Function that takes an object and converts it to a 2D array.  Each key, value pair in the object should be added to an array - the first item is the key and the second is the value. *Use object and array methods.
    const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
    convertToArray(media_obj)
    // [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]




