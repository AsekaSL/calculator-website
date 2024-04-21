import {data} from '../data/data.js';
let displayNumber = '0';
let calculateNumber = '';
let count = 0;
let charactors = [''];
let numberCharactors = [''];
let bodyColor = 'black';
clickNumberButton();
function clickNumberButton() {
    data.forEach((element) => {
        document.querySelector(`.${element.name}`).addEventListener('click', () => {
            charactors.push(`${element.values}`);
            numberCharactors.push(`${element.values}`);
            numberCharactors.forEach((value) => {
                calculateNumber += value;
            }); 
            document.querySelector('.display').innerHTML = calculateNumber;
            calculateNumber = '';
        });
    });
}

document.querySelector('.plus-minus-button').addEventListener('click', () => {
    if ( count == 0 ) {
        charactors[0] = ' - ';
        charactors.forEach((value) => {
            calculateNumber += value;
        });
        displayNumber = calculateNumber === ' - ' 
        ? ' - 0'
        : calculateNumber; 
        document.querySelector('.display').innerHTML = displayNumber;
        calculateNumber = '';
        count ++;
    }else{
        charactors[0] = '';
        charactors.forEach((value) => {
            calculateNumber += value;
        });
        displayNumber = calculateNumber === ''
        ? ' 0 '
        :calculateNumber; 
        document.querySelector('.display').innerHTML = displayNumber;
        calculateNumber = '';
        count = 0;
    }
});
document.querySelector('.reset').addEventListener('click', () => {
    calculateNumber = '0';
    charactors = [''];
    numberCharactors = [''];
    document.querySelector('.display').innerHTML = calculateNumber;
    calculateNumber = '';
});
document.querySelector('.zero-button').addEventListener('click', () => {
    charactors.push('0');
    numberCharactors.push('0');
    numberCharactors.forEach((value) => {
        calculateNumber += value;
    }); 
    document.querySelector('.display').innerHTML = calculateNumber;
    calculateNumber = '';
});
document.querySelector('.divide-button').addEventListener('click', () => {
    charactors.forEach((value) => {
        calculateNumber += value;
    });
    displayNumber = calculateNumber;
    charactors.push(' / ');
    numberCharactors = [''];
    calculateNumber = '';
    document.querySelector('.display').innerHTML = displayNumber;
});
document.querySelector('.multiple-button').addEventListener('click', () => {
    charactors.forEach((value) => {
        calculateNumber += value;
    });
    displayNumber = calculateNumber;
    charactors.push(' * ');
    numberCharactors = [''];
    calculateNumber = '';
    document.querySelector('.display').innerHTML = displayNumber;
});
document.querySelector('.plus-button').addEventListener('click', () => {
    charactors.forEach((value) => {
        calculateNumber += value;
    });
    displayNumber = calculateNumber;
    charactors.push(' + ');
    numberCharactors = [''];
    console.log(numberCharactors);
    calculateNumber = '';
    document.querySelector('.display').innerHTML = displayNumber;
});
document.querySelector('.subtract-button').addEventListener('click', () => {
    charactors.forEach((value) => {
        calculateNumber += value;
    });
    displayNumber = calculateNumber;
    charactors.push(' - ');
    numberCharactors = [''];
    calculateNumber = '';
    document.querySelector('.display').innerHTML = displayNumber;
});
document.querySelector('.equal-button').addEventListener('click', () => {
    charactors.forEach((value) => {
        calculateNumber += value;
    });
    calculateNumber = eval(calculateNumber);
    document.querySelector('.display').innerHTML = calculateNumber;
    numberCharactors =[''];
    charactors = [''];
    calculateNumber = '';
});
document.querySelector('.point-button').addEventListener('click', () => {
    charactors.push('.');
    numberCharactors.push('.');
    numberCharactors.forEach((value) => {
        calculateNumber += value;
    }); 
    document.querySelector('.display').innerHTML = calculateNumber;
    calculateNumber = '';
});
document.querySelector('.backspace').addEventListener('click', () => {
    numberCharactors.pop();
    charactors.pop();
    numberCharactors.forEach((value) => {
        calculateNumber += value;
    }); 
    document.querySelector('.display').innerHTML = calculateNumber === ''
    ? '0'
    : calculateNumber; 

    calculateNumber = '';
});

document.querySelector('.js-color-box').addEventListener('click', () => {
    if (bodyColor == 'black') {
        document.querySelector('.calculator-body').classList.add('calculator-body-color-change');
        document.querySelector('.js-color-box').classList.add('color-box-black');
        document.querySelector('.display').classList.add('color-change-calculator-display');
        bodyColor = 'white';
    }else{
        document.querySelector('.calculator-body').classList.remove('calculator-body-color-change');
        document.querySelector('.js-color-box').classList.remove('color-box-black');
        document.querySelector('.display').classList.remove('color-change-calculator-display');
        bodyColor = 'black';
    }
});

setTimeout(colorChangedMessage, 3000);
setTimeout(removeColorChanged, 7000);

function colorChangedMessage() {
    document.querySelector('.color-change-message').classList.add('color-changed-message');
}
function removeColorChanged() {
    document.querySelector('.color-change=-message').classList.remove('color-changed-message');
}