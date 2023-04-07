
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function () {

    let numbersBtn = document.querySelectorAll(".operand");
    let operatorsBtn = document.querySelectorAll(".operator");

    let clearBtn = document.querySelector("#clear");
    let equal = document.querySelector("#equals");
    let decimal = document.querySelector("#decimal")
    let percent = document.querySelector("#percent");
    let sign = document.querySelector("#sign");

    let display = document.getElementById("display");

    numbersBtn.forEach((number) => number.addEventListener('click', function (e) {
        handleNumber(e.target.textContent);

        if (previousValue === '') {
            display.textContent = currentValue;
        } else {
            display.textContent = previousValue + " " + operator + " " + currentValue;
        }
    }))

    operatorsBtn.forEach((op) => op.addEventListener('click', function (e) {
        if (previousValue !== '' && currentValue !== '') {
            currentValue = calculate();
            display.textContent = currentValue;
        }
        handleOperator(e.target.textContent);
    }))

    clearBtn.addEventListener('click', function () {
        previousValue = '';
        currentValue = '';
        operator = '';
        display.textContent = '0';
    })

    equal.addEventListener('click', function () {
        currentValue = calculate();
        previousValue = '';
        display.textContent = currentValue;

    })

    decimal.addEventListener('click', function () {
        if (!currentValue.includes(".")) {
            return currentValue += '.';
        }
    })

    percent.addEventListener('click', function () {
        currentValue = currentValue / 100;
        display.textContent = currentValue;
    })

    sign.addEventListener('click', function () {
        if (currentValue > 0) {
            currentValue *= -1;
            display.textContent = currentValue;
        } else if (currentValue < 0) {
            currentValue *= -1;
            display.textContent = currentValue;
        }
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
    console.log(operator);
}
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        return add(previousValue, currentValue);
    } else if (operator === "-") {
        return subtract(previousValue, currentValue);
    } else if (operator === "*") {
        return multiply(previousValue, currentValue);
    } else if (operator === "/") {
        return divide(previousValue, currentValue);
    }
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        currentValue = previousValue;
        previousValue = '';
        alert("Cannot divide by 0!");
        return currentValue;
    } else {
        return num1 / num2;
    }
}
