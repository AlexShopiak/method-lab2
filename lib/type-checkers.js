'use strict'

const {messages} = require('./messages.js');

const checkForInt = number => {
    const state1 = Number.isInteger(number);
    if (!state1) {
        throw new Error(messages.notInt);
    }
}

const checkForChar = string => {
    const state1 = typeof string == 'string';
    if (!state1) {
      throw new Error(messages.notChar);
    }

    const state2 = string.match(/^[A-Za-z]$/i) != null;
    if (!state2) {
        throw new Error(messages.notChar);
    }
}

const checkForCharArray = array => {
    const state1 = Array.isArray(array);
    if (!state1) {
        throw new Error(messages.notCharArr);
    }

    for (const element of array) {
        const state2 = typeof element == 'string';
        if (!state2) {
            throw new Error(messages.notCharArr);
        }
        const state3 = element.match(/^[A-Za-z]$/i) != null;
        if (!state3) {
            throw new Error(messages.notCharArr);
        }
    }
}

const checkForIndexBetween = (index, minIndex, maxIndex) => {
    const state1 = index >= minIndex;
    const state2 = index <= maxIndex;
    if (!(state1 && state2)) {
        throw new Error(messages.invInd);
    }
}

module.exports = {
    checkForInt, 
    checkForChar, 
    checkForCharArray,
    checkForIndexBetween,
}