'use strict' 

const {
        checkForInt, 
        checkForChar, 
        checkForCharArray,
        checkForValidIndex,
    } = require('./type-checkers.js');

class Node { 
    constructor(data) { 
        this.prev = null;
        this.next = null;
        this.data = data; 
    }   
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    length() {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }
    
    append(element) {
        checkForChar(element);
        const node = new Node(element);
        if (!this.length()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    insert(element, index) {
        checkForChar(element);
        checkForInt(index);
        checkForValidIndex(index, this.length());
        const node = new Node(element);
        if (!this.length()){
            this.head = node;
            this.tail = node;
        } else if (index === 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else if (index === this.lenght()) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            const prevNode = currentNode.prev;

            prevNode.next = node;
            node.prev = prevNode;

            currentNode.prev = node;
            node.next = currentNode;
        }
    }

    delete(index) { 
        checkForInt(index);
        checkForValidIndex(index, this.length() - 1);

        let deletedNode;
        if (this.length() === 1) {
            deletedNode = this.head;
            this.head = null;
            this.tail = null;
        } else if (index === 0) {
            deletedNode = this.head;
            const nextNode = this.head.next;
            nextNode.prev = null;
            this.head = nextNode;
        } else if (index === this.length() - 1) {
            deletedNode = this.tail;
            const prevNode = this.tail.prev;
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            deletedNode = currentNode;
            const prevNode = currentNode.prev;
            const nextNode = currentNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        return deletedNode.data;
    }

    deleteAll(element) { //to refactor
        checkForChar(element);
        //this.#list = this.#list.filter(i => i != element);
    }

    get(index) {  //to refactor
        checkForInt(index);
        checkForValidIndex(index, this.length() - 1);
        //return this.#list[index];
    }

    clone() { //to refactor
        //const clone = new LinkedList();
        //clone.#list = [...this.#list]
        //return clone;
    }

    reverse() { //to refactor
        //this.#list.reverse();
    }

    findFirst(element) { //to refactor
        checkForChar(element);
        //return this.#list.indexOf(element);
    }

    findLast(element) { //to refactor
        checkForChar(element);
        //return this.#list.lastIndexOf(element);
    }

    clear() { 
        this.head = null;
        this.tail = null;
    }

    extend(elements) { //to refactor
        //const array = elements.#list;
        checkForCharArray(array);
        //this.#list.push(...array);
    }


    //For testing. Operates an array
    fast_clone() { //следить
        const array = [];
        let currentNode = this.head;
        while(currentNode){
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }
    //For testing. Operates an array
    fast_extend(array) { //следить
        checkForCharArray(array);
        array.forEach(x => this.append(x));
    }
}

module.exports = {LinkedList}