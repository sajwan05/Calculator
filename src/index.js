const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// Basic Math functions

function sum(a, b){
    if(typeof a !== "number" && typeof b !== number) return "Oops";
    return a + b;
}

function difference(a, b){
     if(typeof a !== "number" && typeof b !== number) return "Oops";
    return a - b;
}

function product(a, b){
     if(typeof a !== "number" && typeof b !== number) return "Oops";
    return a * b;
}

function division(a, b){
     if(typeof a !== "number" && typeof b !== number && b === 0) return "Oops";
    return a / b;
}

function calculator(number1, operation, number2){

}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return sum(num1, num2);
            break;
        case "-":
            return difference(num1, num2);
            break;
        case "*":
            return product(num1, num2);
            break;
        case "/":
            return division(num1, num2);
            break;
        default:
            return `Sorry! Operation ${operator} is not available`;
    }
}