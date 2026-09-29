const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// Basic Math functions

function sum(a, b){
    if(typeof a !== "number" || typeof b !== "number") return "Oops";
    return a + b;
}

function difference(a, b){
     if(typeof a !== "number" || typeof b !== "number") return "Oops";
    return a - b;
}

function product(a, b){
     if(typeof a !== "number" || typeof b !== "number") return "Oops";
    return a * b;
}

function division(a, b){
     if(typeof a !== "number" || typeof b !== "number" || b === 0) return "Oops";
    return a / b;
}


function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return sum(num1, num2);
        case "-":
            return difference(num1, num2);
        case "x":
            return product(num1, num2);
        case "/":
            return division(num1, num2);
        default:
            return `Sorry! Operation ${operator} is not available`;
    }
}

let currentNumber = "";
let firstNumber = null;
let lastNumber = null;
let operator = null;



buttons.addEventListener("click", (e) => {

    const value = e.target.textContent.toLowerCase();
    let number;
    let op;

    switch(value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            number = value;
            display.textContent = number;
            break;
        case "+":
        case "x":
        case "-":
        case "/":
            op = value;
            break;
        case "clear":
            display.textContent = "0";
            firstNumber = null;
            secondNumber = null;
            operation = null;
    }

    if(!Number.isNaN(parseInt(value))){
        currentNumber += number;
    }

    handlesOperators(op);

});

function handlesOperators(op){
    if(op === "+" || op === "-" ||
        op === "x" || op === "/" 
    ){
        firstNumber = parseInt(currentNumber);
        currentNumber = "";
        operator = op;
    }
}





const equal = document.querySelector(".equal");

equal.addEventListener("click", (e) => {

    secondNumber = parseInt(currentNumber);
    
    let result = operate(operator, firstNumber, secondNumber);

    display.textContent = `${firstNumber} ${operator} ${secondNumber} = ${result}`;

    currentNumber = "";
    firstNumber = null;
    operator = null;
    secondNumber = null;

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
});



