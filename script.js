// query selectors
const screen = document.querySelector('.screen');
const clearCalc = document.querySelector('.clear');
const deleteDigit = document.querySelector('.delete');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const body = document.querySelector('body');

// variables and elements
const screenNumbers = document.createElement('p');
screenNumbers.style.fontSize ='30px';
screen.appendChild(screenNumbers);

let number1 = '';
let number2 = '';
let answer = 0;
let symbol = '';


// eventlisteners

body.addEventListener('keydown', keyboardClick);

numbers.addEventListener('click',clickNumbers)

operators.addEventListener('click',clickOperators)

clearCalc.addEventListener('click',clear)

deleteDigit.addEventListener('click',deleteLastDigit)



// functions

function deleteLastDigit(){
    screenNumbers.textContent = screenNumbers.textContent.slice(0, -1);
}

function clear(){
    screenNumbers.textContent ='';
    number1 = '';
    number2 = '';
    symbol = '';
}

function clickOperators(e){
    if (number1 === ''){
        switch (e.target.textContent) {
           case '+' :
               symbol = '+';
               number1 = saveNumber();
               break;
           case '-' :
               symbol = '-';
               number1 = saveNumber();
               break;
           case '*' :
               symbol = '*';
               number1 = saveNumber();
               break;
           case '/':
               symbol = '/';
               number1 = saveNumber();
               break;
       }
    }

   else{
       switch (e.target.textContent) {
           case '+' :
               symbol = '+';
               screenNumbers.textContent = ''
               break;
           case '-' :
               symbol = '-';
               screenNumbers.textContent = ''
               break;
           case '*' :
               symbol = '*';
               screenNumbers.textContent = ''
               break;
           case '/':
               symbol = '/';
               screenNumbers.textContent = ''
               break;
       }
    }
}

function clickNumbers(e){
    switch (e.target.textContent) {
        case '1':
            screenNumbers.textContent += '1';
            break;
        case '2':
            screenNumbers.textContent += '2';
            break;
        case '3':
            screenNumbers.textContent += '3';
            break;
        case '4':
            screenNumbers.textContent += '4';
            break;
        case '5':
            screenNumbers.textContent += '5';
            break;
        case '6':
            screenNumbers.textContent += '6';
            break;
        case '7':
            screenNumbers.textContent += '7';
            break;
         case '8':
            screenNumbers.textContent += '8';
            break;
        case '9':
            screenNumbers.textContent += '9';
            break;
        case '0':
            screenNumbers.textContent += '0';
            break;
        case '.':
            if(screenNumbers.textContent.includes('.') === false){
                screenNumbers.textContent += '.';
            }
            break;
        case '=':
            if(number1 !== '' && number2 === '' && symbol !== ''){
               number2 =saveNumber();
               equalOperator();
            }
            break;             
}}

function saveNumber(){
    let final = Number(screenNumbers.textContent);
    screenNumbers.textContent = '';
    return final; 
}

function equalOperator(){
    number1 = calculation(number1, number2, symbol);
    screenNumbers.textContent = number1;
    number2 =''
    symbol = '';
}

function calculation(num1, num2, operator){
    switch (operator) {
        case '+' :
            return num1 + num2;

        case '-' :
            return num1 - num2;

        case '*' :
            return num1 * num2;

        case '/' :
            return num1 / num2;
}}

// for the keyboard
function keyboardClick(e){
    switch (e.key) {
        case '1':
            screenNumbers.textContent += '1';
            break;
        case '2':
            screenNumbers.textContent += '2';
            break;
        case '3':
            screenNumbers.textContent += '3';
            break;
        case '4':
            screenNumbers.textContent += '4';
            break;
        case '5':
            screenNumbers.textContent += '5';
            break;
        case '6':
            screenNumbers.textContent += '6';
            break;
        case '7':
            screenNumbers.textContent += '7';
            break;
         case '8':
            screenNumbers.textContent += '8';
            break;
        case '9':
            screenNumbers.textContent += '9';
            break;
        case '0':
            screenNumbers.textContent += '0';
            break;
        case '.':
            if(screenNumbers.textContent.includes('.') === false){
                screenNumbers.textContent += '.';
            }
            break;
        case 'Enter':
            if(number1 !== '' && number2 === '' && symbol !== ''){
                number2 =saveNumber();
                equalOperator();
            }
            break; 
        case 'Delete':
            clear()
            break;
        case 'Backspace':
            deleteLastDigit();
            break;
    }

    if (number1 === ''){
        switch (e.key) {
            case '+' :
                symbol = '+';
                number1 = saveNumber();
                break;
            case '-' :
                symbol = '-';
                number1 = saveNumber();
                break;
            case '*' :
                symbol = '*';
                number1 = saveNumber();
                break;
            case '/':
                symbol = '/';
                number1 = saveNumber();
                break;
        }
    }

    else{
        switch (e.key) {
            case '+' :
                symbol = '+';
                screenNumbers.textContent = ''
                break;
            case '-' :
                symbol = '-';
                screenNumbers.textContent = ''
                break;
            case '*' :
                symbol = '*';
                screenNumbers.textContent = ''
                break;
            case '/':
                symbol = '/';
                screenNumbers.textContent = ''
                break;
        }
    }
 }