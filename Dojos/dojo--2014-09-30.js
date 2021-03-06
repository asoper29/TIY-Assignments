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

function stringCalc(){

  var words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
                six: 6, seven: 7, eight: 8, nine: 9, ten: 10};
  return {
    fromEnglish : function(wordA, wordB){
      return words[wordA] + words[wordB];
    },
  }
}

var assert = require('chai').assert;

describe('fromEnglish()', function(){
  it('should return "0" when given "zero" and "zero"', function() {
    assert.equal(stringCalc().fromEnglish('zero', 'zero'), 0);
  });
  it('should return "0" when given "zero" and "one"', function() {
    assert.equal(stringCalc().fromEnglish('zero', 'one'), 1);
  });
  it('should return "0" when given "zero" and "two"', function() {
    assert.equal(stringCalc().fromEnglish('zero', 'two'), 2);
  });
  it('should return "0" when given "two" and "two"', function() {
    assert.equal(stringCalc().fromEnglish('two', 'two'), 4);
  });
  it('should return "0" when given "five" and "five"', function() {
    assert.equal(stringCalc().fromEnglish('five', 'five'), 10);
  });
  it('should return "0" when given "nine" and "ten"', function() {
    assert.equal(stringCalc().fromEnglish('nine', 'ten'), 19);
  });
});
