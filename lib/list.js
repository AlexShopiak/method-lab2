'use strict' 

const {
        checkForInt, 
        checkForChar, 
        checkForCharArray,
        checkForIndexBetween,
    } = require('./type-checkers.js');

class List {
    #list;
    constructor() {
        this.#list = [];
    }

    length() {
        return this.#list.length;
    }
    
    append(element) {
        checkForChar(element);
        this.#list.push(element);
    }

    insert(element, index) {
        checkForChar(element);
        checkForInt(index);
        checkForIndexBetween(index, 0, this.length());
        this.#list.splice(index, 0, element);
    }

    delete(index) {
        checkForInt(index);
        checkForIndexBetween(index, 0, this.length() - 1);
        const spliceArray = this.#list.splice(index, 1);
        return spliceArray[0];
    }

    deleteAll(element) {
        checkForChar(element);
        this.#list = this.#list.filter(i => i != element);
    }

    get(index) { 
        checkForInt(index);
        checkForIndexBetween(index, 0, this.length() - 1);
        return this.#list[index];
    }

    clone() {
        const clone = new List();
        clone.#list = [...this.#list]
        return clone;
    }

    reverse() {
        this.#list.reverse();
    }

    findFirst(element) {
        checkForChar(element);
        return this.#list.indexOf(element);
    }

    findLast(element) {
        checkForChar(element);
        return this.#list.lastIndexOf(element);
    }

    clear() {
        this.#list = [];
    }

    extend(elements) {
        const array = elements.#list;
        checkForCharArray(array);
        this.#list.push(...array);
    }


    //For testing. Operates an array
    fast_clone() {  
        return [...this.#list];
    }
    //For testing. Operates an array
    fast_extend(elements) {  
        checkForCharArray(elements);
        this.#list.push(...elements);
    }
}

module.exports = {List}