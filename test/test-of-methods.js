const {messages} = require('../lib/messages.js');

const initTesting = list => {

    test('testing length()', () => {
        list.clear();

        expect(list.length()).toEqual(0);
        list.fast_extend(['a','a']);
        expect(list.length()).toEqual(2);
        list.fast_extend(['b','b','b']);
        expect(list.length()).toEqual(5);
        list.clear();
        expect(list.length()).toEqual(0);
    })

    test('testing append()', () => {
        list.clear();

        list.append('a');
        expect(list.fast_clone()).toEqual(['a']);
        list.append('b');
        expect(list.fast_clone()).toEqual(['a', 'b']);

        expect(() => list.append(4)).toThrow(messages.notChar);
        expect(() => list.append("meow")).toThrow(messages.notChar);
        expect(() => list.append("1")).toThrow(messages.notChar);
    })

    test('testing insert()', () => {
        list.clear();

        list.fast_extend(['a','b','c','d']);
        list.insert('X', 0);
        expect(list.fast_clone()).toEqual(['X','a','b','c','d']);
        list.insert('X', 2);
        expect(list.fast_clone()).toEqual(['X','a','X','b','c','d']);
        list.insert('X', 6);
        expect(list.fast_clone()).toEqual(['X','a','X','b','c','d','X']);

        expect(() => list.insert('5', 1)).toThrow(messages.notChar);
        expect(() => list.insert('a', 1.5)).toThrow(messages.notInt);
        expect(() => list.insert('a', -1)).toThrow(messages.invInd);
        expect(() => list.insert('a', 10)).toThrow(messages.invInd);
    })

    test('testing delete()', () => {
        list.clear();
        list.fast_extend(['a','b','c','d','e','f','g']);

        expect(list.delete(1)).toEqual('b');
        expect(list.fast_clone()).toEqual(['a','c','d','e','f','g']);
        expect(list.delete(5)).toEqual('g');
        expect(list.fast_clone()).toEqual(['a','c','d','e','f']);

        expect(() => list.delete(-1)).toThrow(messages.invInd);
        expect(() => list.delete(5)).toThrow(messages.invInd);
        expect(() => list.delete(-1.5)).toThrow(messages.notInt);
        expect(() => list.delete('d')).toThrow(messages.notInt);
    })

    test('testing deleteAll()', () => {
        list.clear();
        list.fast_extend(['a','b','a','d','a','f','g']);

        list.deleteAll('a')
        expect(list.fast_clone()).toEqual(['b','d','f','g']);
        list.deleteAll('f')
        expect(list.fast_clone()).toEqual(['b','d','g']);
        list.deleteAll('e')
        expect(list.fast_clone()).toEqual(['b','d','g']);

        expect(() => list.deleteAll(45)).toThrow(messages.notChar);
        expect(() => list.deleteAll('start')).toThrow(messages.notChar);
    })

    test('testing get()', () => {
        list.clear();
        list.fast_extend(['a','b','c','d','e']);

        expect(list.get(0)).toEqual('a');
        expect(list.get(3)).toEqual('d');
        expect(list.get(1)).toEqual('b');

        let data = list.get(0);
        data = 'X';
        expect(list.get(0)).toEqual('a');

        expect(() => list.get('d')).toThrow(messages.notInt);
        expect(() => list.get(23)).toThrow(messages.invInd);
    })

    test('testing clone()', () => {
        list.clear();
        list.fast_extend(['a','b','c']);

        const list2 = list.clone();
        expect(list2.fast_clone()).toEqual(['a','b','c']);

        list.fast_extend(['d','e','f']);
        expect(list2.fast_clone()).toEqual(['a','b','c']);
    })

    test('testing reverse()', () => {
        list.clear();
        list.fast_extend(['a','b','c','d','e']);

        list.reverse();
        expect(list.fast_clone()).toEqual(['e','d','c','b','a']);
        list.delete(0);
        list.reverse();
        expect(list.fast_clone()).toEqual(['a','b','c','d']);
    })

    test('testing findFirst()', () => {
        list.clear();
        list.fast_extend(['a','b','a','d','e']);

        expect(list.findFirst('a')).toEqual(0);
        expect(list.findFirst('d')).toEqual(3);
        expect(list.findFirst('g')).toEqual(-1);

        expect(() => list.findFirst(2)).toThrow(messages.notChar);
        expect(() => list.findFirst('meow')).toThrow(messages.notChar);
    })

    test('testing findLast()', () => {
        list.clear();
        list.fast_extend(['a','b','a','e','e']);

        expect(list.findLast('a')).toEqual(2);
        expect(list.findLast('e')).toEqual(4);
        expect(list.findLast('f')).toEqual(-1);

        expect(() => list.findLast(4)).toThrow(messages.notChar);
        expect(() => list.findLast('abc')).toThrow(messages.notChar);
    })

    test('testing clear()', () => {
        list.clear();
        list.fast_extend(['a','b','c']);

        list.clear();
        expect(list.fast_clone()).toEqual([]);
        list.clear();
        expect(list.fast_clone()).toEqual([]);
    })

    test('testing extend()', () => {
        list.clear();
        const list2 = list.clone();
        list2.append('a');
        list2.append('b');
        list2.append('c');

        expect(list.fast_clone()).toEqual([]);
        list.extend(list2);
        expect(list.fast_clone()).toEqual(['a','b','c']);

        list2.append('d');
        list2.append('e');
        list2.append('f');
        expect(list.fast_clone()).toEqual(['a','b','c']);
    })
}

module.exports = {initTesting};