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
     if(typeof a !== "number" || typeof b !== "number" || b === 0) 
        return "OMG dividing with zero??";
     let answer = parseFloat((a/b).toFixed(2));
    return answer;
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
let secondNumber = null;
let operator = null;
let result = 0;



buttons.addEventListener("click", (e) => {

    const value = e.target.textContent.toLowerCase();
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
            currentNumber += value;
            display.textContent = currentNumber;
            break;
        case "+":
        case "x":
        case "-":
        case "/":
            op = value;
            display.textContent += ` ${op}`;
            break;
        case "clear":
            display.textContent = "0";
            currentNumber = "";
            firstNumber = null;
            secondNumber = null;
            operator = null;
    }

    

    handlesOperators(op);

});

function handlesOperators(op){
    if(op === "+" || op === "-" ||
        op === "x" || op === "/" 
    ){
        if(firstNumber === null){
            firstNumber = parseInt(currentNumber);
            operator = op;
            currentNumber = "";
        }else{
            secondNumber = parseInt(currentNumber);
            result = operate(operator, firstNumber, secondNumber);

            firstNumber = result;
            display.textContent = firstNumber;
            operator = op;
            currentNumber = "";
        }
    }
}





const equal = document.querySelector(".equal");

equal.addEventListener("click", (e) => {

    secondNumber = parseInt(currentNumber);
    display.textContent += ` ${secondNumber}`;
    
    result = operate(operator, firstNumber, secondNumber);

    display.textContent = `${result}`;

    currentNumber = result;
    firstNumber = null;
    operator = null;
    secondNumber = null;
});



