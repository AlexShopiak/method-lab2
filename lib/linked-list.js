'use strict' 

const {
        checkForInt, 
        checkForChar, 
        checkForCharArray,
        checkForIndexBetween,
    } = require('./type-checkers.js');

class Node { 
    constructor(data) { 
        this.prev = null;
        this.next = null;
        this.data = data; 
    }   
}

class LinkedList {
    #head;
    #tail;
    constructor() {
        this.#head = null;
        this.#tail = null;
    }

    length() {
        let counter = 0;
        let currentNode = this.#head;
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
            this.#head = node;
            this.#tail = node;
        } else {
            node.prev = this.#tail;
            this.#tail.next = node;
            this.#tail = node;
        }
    }

    insert(element, index) {
        checkForChar(element);
        checkForInt(index);
        checkForIndexBetween(index, 0, this.length());
        const node = new Node(element);
        if (!this.length()){
            this.#head = node;
            this.#tail = node;
        } else if (index === 0) {
            this.#head.prev = node;
            node.next = this.#head;
            this.#head = node;
        } else if (index === this.length()) {
            this.#tail.next = node;
            node.prev = this.#tail;
            this.#tail = node;
        } else {
            let currentNode = this.#head;
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
        checkForIndexBetween(index, 0, this.length() - 1);

        let deletedNode;
        if (this.length() === 1) {
            deletedNode = this.#head;
            this.#head = null;
            this.#tail = null;
        } else if (index === 0) {
            deletedNode = this.#head;
            const nextNode = this.#head.next;
            nextNode.prev = null;
            this.#head = nextNode;
        } else if (index === this.length() - 1) {
            deletedNode = this.#tail;
            const prevNode = this.#tail.prev;
            prevNode.next = null;
            this.#tail = prevNode;
        } else {
            let currentNode = this.#head;
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

    deleteAll(element) {
        checkForChar(element);
        let index = 0;
        let currentNode = this.#head;
        while (currentNode) {
            if(currentNode.data == element) {
                this.delete(index);
                index--;
            }
            currentNode = currentNode.next;
            index++;
        }
    }

    get(index) { 
        checkForInt(index);
        checkForIndexBetween(index, 0, this.length() - 1);

        let currentNode = this.#head;
        for (let i = 0; i < index;i++){
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    clone() {
        const clone = new LinkedList();
        let currentNode = this.#head;
        while (currentNode) {
            clone.append(currentNode.data);
            currentNode = currentNode.next;
        }
        return clone;
    }

    reverse() {
        const clone = new LinkedList();
        let currentNode = this.#tail;
        while (currentNode) {
            clone.append(currentNode.data);
            currentNode = currentNode.prev;
        }
        this.clear();
        this.extend(clone);
    }

    findFirst(element) {
        checkForChar(element);
        let index = 0;
        let currentNode = this.#head;
        while (currentNode) {
            if (currentNode.data == element) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    findLast(element) {
        checkForChar(element);
        let index = this.length() - 1;
        let currentNode = this.#tail;
        while (currentNode) {
            if (currentNode.data == element) {
                return index;
            }
            currentNode = currentNode.prev;
            index--;
        }
        return -1;
    }

    clear() { 
        this.#head = null;
        this.#tail = null;
    }

    extend(elements) { 
        let currentNode = elements.#head;
        while (currentNode) {
            this.append(currentNode.data);
            currentNode = currentNode.next;
        }
    }


    //For testing. Operates an array
    fast_clone() { 
        const array = [];
        let currentNode = this.#head;
        while(currentNode){
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return array;
    }
    //For testing. Operates an array
    fast_extend(array) { 
        checkForCharArray(array);
        array.forEach(x => this.append(x));
    }
}

module.exports = {LinkedList}