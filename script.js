// variable and output
var message = "Hello, Javascript";
console.log(message);

//Functions. function takes argument names name and returns a msg
function greet(name) {
    return "Hello, " + name + "!";
}

//Here we call the function
var greeting = greet("World");
console.log(greeting)

//conditions

function isEven(num){
    return num % 2 == 0;
}

console.log(isEven(4)); //This return true
console.log(isEven(7))