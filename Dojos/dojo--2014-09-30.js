/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

var assert = require('chai').assert;

var words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10};

var stringCalc = {
  fromEnglish : function(wordA, wordB){
    return words[wordA] + words[wordB];
  }
}

describe('fromEnglish()', function(){
  it('should return "0" when given "zero" and "zero"', function() {
    assert.equal(stringCalc.fromEnglish('zero', 'zero'), 0);
  });
});

// describe('add()', function(){
//   it('should add "0" to "0"', function() {
//     assert.equal(add("zero", "zero"), 0);
//   });
//   it('should add "1" to "2"', function() {
//     assert.equal(add("one", "two"), 3);
//   });
//   it('should add "3" to "4"', function() {
//     assert.equal(add("three", "four"), 7);
//   });
//   it('should add "5" to "6"', function() {
//     assert.equal(add("five", "six"), 11);
//   });
//   it('should add "7" to "8"', function() {
//     assert.equal(add("seven", "eight"), 15);
//   });
//   it('should add "9" to "10"', function() {
//     assert.equal(add("nine", "ten"), 19);
//   });
// });
