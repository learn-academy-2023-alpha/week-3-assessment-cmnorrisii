// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciFinder", () => {
      const fibLength1 = 6
      // Expected output: [1, 1, 2, 3, 5, 8]
      const fibLength2 = 10
      // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
        expect(fibonacciFinder(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciFinder(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
      })
    })

    // ReferenceError: fibonacciFinder is not defined

// b) Create the function that makes the test pass.
// pseudo: create a function called fibonacciFinder that takes in a number as an argument and returns an array of the argument numbers value as the array's length containing the fibonacci sequence up to that argument value's length. (so an argument of 6 should return an array that has 6 indexes)
// declare a new varible named newArray that is an empty array, this will be what we .push() our values into and return when our function is called.
// create a for loop within our function that iterates over our argument number as many times as its value (five times for 5, twelve times for 12, etc) by setting the loop to stop iterating at that arguments value (i < number).
// in our for loop, create an if conditional statement that pushes a 1 into our newArray if the current index being iterated through strictly equals 0 or 1, this will guarantee we output the correct first two values in the fibonacci sequence (1, 1).
// else, within or newArray we want to push the sum of the first index before our current index, and the second furthest index before our current index (newArray[i - 1] + newArray[i - 2]). (1 + 1 pushes 2, then 2 + 1 pushes 3, then 3 + 2 pushes 5, etc.)
// after we close out our conditional statement, return newArray

const fibonacciFinder = (number) => {
  let newArray = []
  for (let i = 0; i < number; i++) {
    if (i === 0 || i === 1) {
      newArray.push(1)
    } else {
      newArray.push(newArray[i - 1] + newArray[i - 2])
    }
  }
  return newArray
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("arraySorter", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
  // Expected output: [10, 15, 20, 45, 60, 65, 100]
  it("returns an array of the values sorted from least to greatest", () => {
    expect(arraySorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(arraySorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: arraySorter is not defined

// b) Create the function that makes the test pass.

// pseudo: (this one is very bloated again lol, learned a lot about .sort() this time and wanted to share my new knowledge :) )
// Create a function named arraySorter that takes an object as an argument
// ultimately we want our function to return an array of the 'values' of our object argument sorted from lowest to highest value.
// to do this we need to define a variable named newArray within our function that creates an array from the values contained within the argument object. Object.values() is a built-in method that takes an object as an argument and returns an array of the argument objects values. We need to pass our argument object for our arraySorter function into this built-in method and assign it to newArray.
// .sort() is a built in method that sorts an array in ascending order. However, while .sort() is a useful tool, they way it translates and defines what value is greater than another can be confusing, especially when dealing with numbers. this built-in method converts each element into a string, then sorts those strings by their Unicode order. Briefly, this means that .sort() will sort 65 before 7 because '6' is before '7', even though 7 is less than 65. so we have to define within our .sort() how we want to sort our values by passing in a function. .sort((a, b) => (a - b)) forces our method to compare values as numbers. if after two values are compared the result is negative, 'a' will be placed before 'b'. if the result is 0, the order will not change, and if the result is a positive value, 'b' will be placed before 'a'.
// 
// put a return on that bad boy, and you've got yourself a function that sorts the values from an object!

const arraySorter = (object) => {
  return newArray = Object.values(object).sort((a, b) => (a - b))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayAdder", () => {
  const accountTransactions1 = [100, -17, -23, -9]
  // Expected output: [100, 83, 60, 51]
  const accountTransactions2 = [250, -89, 100, -96]
  // Expected output: [250, 161, 261, 165]
  const accountTransactions3 = []
  // Expected output: []
  it("returns an array of the accumulating sum", () => {
    expect(arrayAdder(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arrayAdder(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arrayAdder(accountTransactions3)).toEqual([])
  })
})

// ReferenceError: arrayAdder is not defined

// b) Create the function that makes the test pass.

// pseudo: 
// create a function named arrayAdder that takes in an array as an argument
// within our function we want to iterate through an array, and return an array of the same length with the accumulating sum of all of the indexes in the argument array..map() is a good HOF to use in this situation, however we need to include a variable that can hold the value of the indexes as they are added together. 
// before our .map(), declare a variable named 'sum' that equals 0. Setting 'sum' to zero allows us to pass over the first index in the array without changing it's value. Setting 'sum' to zero also allows an empty array passed as an argument to remain empty.
// when our .map() iterates through the array it will add 'sum' to the current value, then assign that value to the 'sum' variable using the addition assignment operator (+=). This allows the new 'sum' to be added to the next index, etc, until the end of the array.
// normally we need a return with .map() but if we move our .map() function to one line we can make the code look cleaner, and .map() implies the return. 

const arrayAdder = (array) => {
  let sum = 0
  return array.map((value) => sum += value)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total