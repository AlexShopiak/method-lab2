'use strict'

const messages = {
    1:'Not an integer',
    2:'Not a character',
    3:'Not an array of characters',
    4:'Invalid index',
}

const checkForInt = number => {
    const state1 = Number.isInteger(number);
    if (!state1) {
        throw new Error(messages[1]);
    }
}

const checkForChar = string => {
    const state1 = typeof string == 'string';
    if (!state1) {
      throw new Error(messages[2]);
    }

    const state2 = string.match(/^[A-Za-z]$/i) != null;
    if (!state2) {
        throw new Error(messages[2]);
    }
}

const checkForCharArray = array => {
    const state1 = Array.isArray(array);
    if (!state1) {
        throw new Error(messages[3]);
    }

    for (const element of array) {
        const state2 = typeof element == 'string';
        if (!state2) {
            throw new Error(messages[3]);
        }
        const state3 = element.match(/^[A-Za-z]$/i) != null;
        if (!state3) {
            throw new Error(messages[3]);
        }
    }
}

const checkForValidIndex = (index, maxIndex) => {
    const state1 = index >= 0;
    const state2 = index <= maxIndex;
    if (!(state1 && state2)) {
        throw new Error(messages[4]);
    }
}

module.exports = {
    checkForInt, 
    checkForChar, 
    checkForCharArray,
    checkForValidIndex,
}