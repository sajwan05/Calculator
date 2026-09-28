const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
let number1 = null;
let number2 = null;
let operation;

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

// function calculator(num1, operation, num2){
//     let number = document.createElement("span");
//     let number2 = document.createElement('span');
//     let operator = document.createElement("strong");

//     number.textContent = num1;
//     number2.textContent = num2;
//     operator.textContent = operation;

//     display.appendChild(number);
//     display.appendChild(operator);
//     display.appendChild(number2);

    

//     display.textContent = `${num1} ${operator.textContent} ${num2} = ${operate(operation, num1, num2)}`;

// }

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

buttons.addEventListener("click", (e) => {
    const value = e.target.textContent.toLowerCase();
    console.log(value);
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
            number = parseInt(value);
            display.textContent = number;
            break;
        case "+":
        case "x":
        case "-":
        case "/":
            op = value;
            display.textContent = op;
            break;
        case "clear":
            display.textContent = "0";
            number1 = null;
            number2 = null;
            operation = null;
    }

    if(!number1){
        
        number1 = number;
        
        console.log( typeof number1, number1);
    }else if (number1 && !operation){
        
        operation = op;
        console.log(operation);
    }else {
        
        number2 = number;
        console.log(typeof number2, number2);
    }

});

const equal = document.querySelector(".equal");

equal.addEventListener("click", (e) => {
    let result = operate(operation, number1, number2);

    display.textContent = result;

    number1 = result;
    operation = null;
    number2 = null;
});



