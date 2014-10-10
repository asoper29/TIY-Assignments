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

function fromEnglish(word){
  return words[word];
  // if(x === "zero"){ return 0; }
  // if(x === "one"){ return 1; }
  // if(x === "two"){ return 2; }
  // if(x === "three"){ return 3; }
  // if(x === "four"){ return 4; }
  // if(x === "five"){ return 5; }
  // if(x === "six"){ return 6;}
  // if(x === "seven"){ return 7; }
  // if(x === "eight"){ return 8; }
  // if(x === "nine"){ return 9; }
  // if(x === "ten"){ return 10;}
};



describe('fromEnglish()', function(){
  it('should convert "0" through "10"', function() {
    assert.equal(fromEnglish("zero"), 0);
    assert.equal(fromEnglish("one"),  1);
    assert.equal(fromEnglish("two"), 2);
    assert.equal(fromEnglish("three"),  3);
    assert.equal(fromEnglish("four"), 4);
    assert.equal(fromEnglish("five"),  5);
    assert.equal(fromEnglish("six"), 6);
    assert.equal(fromEnglish("seven"),  7);
    assert.equal(fromEnglish("eight"), 8);
    assert.equal(fromEnglish("nine"),  9);
    assert.equal(fromEnglish("ten"),  10);
  });
});
