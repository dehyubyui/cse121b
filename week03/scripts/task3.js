/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1,number2) {
    return parseFloat(number1) + parseFloat(number2)
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers()   {
    const addEnd1 = document.querySelector("#addend1").value;
    const addEnd2 = document.querySelector("#addend2").value;
    const sumHtml = document.querySelector("#sum");

    const sum = add(addEnd1, addEnd2);
    sumHtml.value = sum;
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const sumButton = document.querySelector("#addNumbers");
sumButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const subtract = function (number1, number2)  {
    return parseFloat(number1) - parseFloat(number2);
}

const subtractNumbers = function () {
    const minuend = document.querySelector("#minuend").value;
    const subtrahend = document.querySelector("#subtrahend").value;
    const differenceHtml = document.querySelector("#difference");

    const difference = subtract(minuend, subtrahend);
    differenceHtml.value = difference;
}

const differenceButton = document.querySelector("#subtractNumbers");
differenceButton.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => parseFloat(number1) * parseFloat(number2);

const mulitplyNumbers = () => {
    const factor1 = document.querySelector("#factor1").value;
    const factor2 = document.querySelector("#factor2").value;
    const productHtml = document.querySelector("#product");

    const product = multiply(factor1, factor2);
    productHtml.value = product;
}

const productButton = document.querySelector("#multiplyNumbers");
productButton.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2)   {
    return parseFloat(number1) / parseFloat(number2);
}

function divideNumbers()  {
    const dividend = document.querySelector("#dividend").value;
    const divisor = document.querySelector("#divisor").value;
    const quotientHtml = document.querySelector("#quotient");

    const quotient = divide(dividend, divisor);
    quotientHtml.value = quotient
}

const divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", divideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = date.getfullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const yearHtml = document.querySelector("#year");
yearHtml.innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const listHtml = document.querySelector("#array");
listHtml.innerHTML = list;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers = list.filter((number) => {return (number % 2 != 0)});
const oddsHtml = document.querySelector("#odds");
oddsHtml.innerHTML = oddNumbers

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = list.filter((number) => {return (number % 2 === 0)});
const evensHtml = document.querySelector("#evens");
evensHtml.innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const sumArray = list.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
const sumOfArrayHtml = document.querySelector("#sumOfArray");
sumOfArrayHtml.innerHTML = sumArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplyArray = list.map((number) => number * 2);
const multipliedHtml = document.querySelector("#multiplied");
multipliedHtml.innerHTML = multiplyArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const initial = 0;
const mappedArray = list.map((number) => number * 2)
const sumMultiplyArray = mappedArray.reduce((previousValue, currentValue) => previousValue + currentValue, initial);
const sumOfMultipliedHtml = document.querySelector("#sumOfMultiplied");
sumOfMultipliedHtml.innerHTML = sumMultiplyArray;