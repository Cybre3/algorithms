const assert = require('chai').assert;
const expect = require('chai').expect;
const stackcode = require('../stack');


describe('Test push', function () {
    it('should add single element', function () {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(23);
        // Assert
        assert.equal(stack.arr.length, 2);
        expect(stack.arr).to.include(23);
        expect(stack.arr).to.be.an('array').that.include(1);
        expect(stack.arr).to.be.an('array').that.include(23);
    })

    it('should add multiple elements', function () {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(23);
        stack.push(50);
        stack.push(34);
        // Assert
        assert.equal(stack.arr.length, 4);
        expect(stack).to.have.deep.property('arr', [1, 23, 50, 34]);
    })
})

describe('Test pop', function () {
    it('should pop single element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(23);
        let result = stack.pop();
        // Assert
        assert.equal(result, 23, 'returned element is not correct');
        assert.equal(stack.arr.length, 1, 'array length is not correct');
        expect(stack.arr).to.not.include(23);
        expect(stack.arr).to.include(1);
    })

    it('should pop multiple elements', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(23);
        stack.push(50);
        stack.push(34);
        stack.push(60);
        stack.push(75);
        let result = stack.pop();
        let result2 = stack.pop();
        // Assert
        assert.equal(result, 75, 'returned element is not correct');
        assert.equal(result2, 60, 'returned element is not correct');
        assert.equal(stack.arr.length, 4, 'array length is not correct');
        expect(stack.arr).to.not.include(75);
        expect(stack.arr).to.not.include(60);
        expect(stack.arr).to.include(34);
        expect(stack).to.have.deep.property('arr', [1, 23, 50, 34]);
    })

    it('should try to pop in empty array', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.pop();
        let result = stack.pop();
        // Assert
        assert.equal(result, false, 'returned element is not correct');
        assert.equal(stack.arr.length, 0, 'array length is not correct');
    })


})

describe('Test peek', function () {
    it('should peek last element from stack with two elements', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(33);
        let result = stack.peek();
        // Assert
        assert.equal(result, 33, 'returned element is not correct');
        assert.equal(stack.arr.length, 2, 'array length is not correct');
    })

    it('should peek last element from stack with single element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        let result = stack.peek();
        // Assert
        assert.equal(result, 1, 'returned element is not correct');
        assert.equal(stack.arr.length, 1, 'array length is not correct');
    })

    it('should peek from empty stack', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.pop();
        // Act
        let result = stack.peek();
        // Assert
        assert.equal(result, undefined, 'returned element is not correct');
        assert.equal(stack.arr.length, 0, 'array length is not correct');
    })
})

describe('Test isEmpty', function () {
    it('should call isEmpty on full stack and receive false', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(33);
        let result = stack.isEmpty();
        // Assert
        assert.equal(result, false, 'unexpectedly stack is empty');
    })
    it('should call isEmpty on empty stack and receive true', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.pop();
        let result = stack.isEmpty();
        // Assert
        assert.equal(result, true, 'unexpectedly stack is not empty');
    })
})

describe('Test size', function () {
    it('should call size() on stack with single element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        let result = stack.size();
        // Assert
        assert.equal(result, 1, 'unexpected size');
    })
    it('should call size() on stack with two elements', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        // Act
        stack.push(33);
        let result = stack.size();
        // Assert
        assert.equal(result, 2, 'unexpected size');
    })
    it('should call size() on empty stack', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.pop();
        // Act
        let result = stack.size();
        // Assert
        assert.equal(result, 0, 'unexpected size');
    })
})

describe('Test search', function () {
    it('search for element, receive index of element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.push(3);
        stack.push(10);
        stack.push(34);
        stack.push(50);
        stack.push(61);
        stack.push(72);
        stack.push(88);
        stack.push(97);

        // Act
        let result = stack.search(88);

        // Assert
        assert.equal(result, 7, 'returned index of the element is not correct');
    })

    it('search for the first element, receive index of element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.push(3);
        stack.push(10);
        stack.push(34);
        stack.push(50);
        stack.push(61);
        stack.push(72);
        stack.push(88);
        stack.push(97);

        // Act
        let result = stack.search(1);

        // Assert
        assert.equal(result, 0, 'returned index of the element is not correct');
    })

    it('search for the last element, receive index of element', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.push(3);
        stack.push(10);
        stack.push(34);
        stack.push(50);
        stack.push(61);
        stack.push(72);
        stack.push(88);
        stack.push(97);

        // Act
        let result = stack.search(97);

        // Assert
        assert.equal(result, 8, 'returned index of the element is not correct');
    })

    it('search for a non existing element, return -1', () => {
        // Arrange
        let stack = new stackcode.Stack(1);
        stack.push(3);
        stack.push(10);
        stack.push(34);
        stack.push(50);
        stack.push(61);
        stack.push(72);
        stack.push(88);
        stack.push(97);

        // Act
        let result = stack.search(20);

        // Assert
        assert.equal(result, -1, 'returned index of the element is not correct');
    })
})