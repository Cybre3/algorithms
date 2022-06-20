const assert = require('chai').assert;
const expect = require('chai').expect;
const queueCode = require('../queue.js');

describe('test enqueue', () => {
    it('should enqueue single element and check first value', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        // Act
        
        // Assert
        assert.equal(queue.front.val, 10);
        assert.equal(queue.rear.val, 10);
    })

    it('should enqueue multiple elements and check first and second values', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        queue.enqueue(5);

        // Act
        
        // Assert
        assert.equal(queue.front.val, 10);
        assert.equal(queue.rear.val, 5);
    })

    it('should enqueue multiple elements and check first and rear values', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        queue.enqueue(5);
        queue.enqueue(30);
        queue.enqueue(25);

        // Act
        
        // Assert
        assert.equal(queue.front.val, 10);
        assert.equal(queue.rear.val, 25);
    })
})

describe('test dequeue', () => {
    it('should dequeue (remove) the only element', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        queue.dequeue();
        // Act
        
        // Assert
        assert.equal(queue.front, null);
        assert.equal(queue.rear, null);
    })

    it('should dequeue (remove) three elements', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        queue.enqueue(5);
        queue.enqueue(30);
        queue.enqueue(25);
        queue.enqueue(100);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        // Act
        
        // Assert
        assert.equal(queue.front.val, 25);
        assert.equal(queue.rear.val, 100);
    })

    it('should enque and dequeue multiple elements', () => {
        // Arrange
        let queue = new queueCode.Queue();
        queue.enqueue(10);
        queue.enqueue(5);
        queue.enqueue(30);
        queue.enqueue(25);
        queue.enqueue(100);
        queue.dequeue();
        queue.dequeue();

        //assert.equal(queue.front.val, 30);
        //assert.equal(queue.rear.val, 100);

        queue.enqueue(300);
        queue.enqueue(400);

        //assert.equal(queue.front.val, 30);
        //assert.equal(queue.rear.val, 400);
        
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        // Act
        // Assert
        assert.equal(queue.front.val, 400);
        assert.equal(queue.rear.val, 400);
    })
})