const add = (a, b) => {
    return Number(a) + Number(b);
}

const subtract = (a, b) => {
    return Number(a) - Number(b);
}

const multiply = (a, b) => {
    return Number(a) * Number(b);
}

const divide = (a, b) => {
    return (b == 0) ? "We don't do that here" : Number(a) / Number(b);
}
const percent = (a, b) => {
    return parseInt(a / 100 * b);
}

const calculate = (operator, numA, numB) => {
    switch (operator) {
        case "add":
            return add(numA, numB);
        case "subtract":
            return subtract(numA, numB);
        case "multiply":
            return multiply(numA, numB);
        case "divide":
            return divide(numA, numB);
        case "percentBtn":
            return percent(numA, numB);
        default:
            break;
    }
}

const elements = {
    display: document.querySelector('.display'),
    clear: document.querySelector('.clearBtn'),
    plusMinus: document.querySelector('#plusMinusBtn'),
    add: document.querySelector('#add'),
    subtract: document.querySelector('#subtract'),
    multiply: document.querySelector('#multiply'),
    divide: document.querySelector('#divide'),
    percentBtn: document.querySelector('#percentBtn'),
    decimalseparator: document.querySelector('.decimal-separator'),
    equalsBtn: document.querySelector('#equalsBtn'),
    delBtn: document.querySelector('#delBtn'),
}

let numberOne = 0;
let numberTwo = 0;
let actualOperation = null;

const numbers = document.querySelectorAll('.number');

numbers.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (elements.display.textContent == '0') {
            elements.display.textContent = e.target.value;
        } else {
            elements.display.textContent += e.target.value
        }
    });
});

elements.clear.addEventListener('click', () => {
    elements.display.innerHTML = 0
});

elements.plusMinus.addEventListener('click', () => {
    const textDisplay = elements.display.textContent
    elements.display.innerHTML = `-${textDisplay}`
});

elements.decimalseparator.addEventListener('click', (e) => {
    elements.display.textContent += '.'
})

elements.add.addEventListener('click', () => {
    numberOne = elements.display.textContent;
    elements.display.innerHTML = '';
    actualOperation = 'add';
});

elements.subtract.addEventListener('click', () => {
    numberOne = elements.display.textContent;
    elements.display.innerHTML = '';
    actualOperation = 'subtract';
});

elements.multiply.addEventListener('click', () => {
    numberOne = elements.display.textContent;
    elements.display.innerHTML = '';
    actualOperation = 'multiply';
});

elements.divide.addEventListener('click', () => {
    numberOne = elements.display.textContent;
    elements.display.innerHTML = '';
    actualOperation = 'divide';
});

elements.percentBtn.addEventListener('click', () => {
    numberOne = elements.display.textContent;
    elements.display.innerHTML = '';
    actualOperation = 'percentBtn';
});

elements.equalsBtn.addEventListener('click', (e) => {
    numberTwo = elements.display.textContent;    
    elements.display.innerHTML = calculate(actualOperation, numberOne, numberTwo);
});

elements.delBtn.addEventListener('click', (e) => {
    elements.display.textContent = elements.display.textContent.slice(0, -1);
});

