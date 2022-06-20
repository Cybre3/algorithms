const assert = require('chai').assert;
const expect = require('chai').expect;
const median = require('../median');

describe("test find median", function () {
    it("test 001", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-3, -1, 0], [3, 4, 5]);
        // Assert
        assert.equal(result, 1.5);
    })

    it("test 002", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([0], [3, 4, 5]);
        // Assert
        assert.equal(result, 3.5);
    })

    it("test 003", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([], [10000]);
        // Assert
        assert.equal(result, 10000);
    })

    it("test 004", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-1], [4]);
        // Assert
        assert.equal(result, 1.5);
    })

    it("test 005", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-376524, -25487, -1000, 0, 2674, 243242], [-23846, -2463, 3534, 23435, 43442, 938724]);
        // Assert
        assert.equal(result, 1337);
    })

    it("test 006", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-1000000, 0, -3], [999999, 1000000]);
        // Assert
        assert.equal(result, 0);
    })

    it("test 007", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-1000000, -999999], [999999, 1000000]);
        // Assert
        assert.equal(result, 0);
    })

    it("test 008", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-10000, -9999, -9877, -9876, -5623, -3000, 1, 34, 567, 673, 2423, 35435, 287243, 288133], [-4, 23, 34, 342, 1021, 1107, 1108, 1109, 1234, 2431, 5333]);
        // Assert
        assert.equal(result, 567);
    })

    it("test 009", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([-1000000, -999999], []);
        // Assert
        assert.equal(result, -999999.5);
    })

    it("test 010", function () {
        // Arrange
        // Act
        let result = median.findMedianSortedArrays([], [999999, 1000000]);
        // Assert
        assert.equal(result, 999999.5);
    })
})