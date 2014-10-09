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

var numLet = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];

function toNumber(x){
  if(x === "zero"){ return 0; }
  if(x === "one"){ return 1; }
  if(x === "two"){ return 2; }
  if(x === "three"){ return 3; }
  if(x === "four"){ return 4; }
  if(x === "five"){ return 5; }
  if(x === "six"){ return 6;}
  if(x === "seven"){ return 7; }
  if(x === "eight"){ return 8; }
  if(x === "nine"){ return 9; }
  if(x === "ten"){ return 10;}
};

var add = function(a, b) {
  a = convertToNumbers(a);
  b = convertToNumbers(b);
  return a + b;
};

describe('toNumber()', function(){
  it('should convert "0" through "ten"', function() {
    assert.equal(toNumber("zero"), 0);
    assert.equal(toNumber("one"),  1);
    assert.equal(toNumber("two"), 2);
    assert.equal(toNumber("three"),  3);
    assert.equal(toNumber("four"), 4);
    assert.equal(toNumber("five"),  5);
    assert.equal(toNumber("six"), 6);
    assert.equal(toNumber("seven"),  7);
    assert.equal(toNumber("eight"), 8);
    assert.equal(toNumber("nine"),  9);
    assert.equal(toNumber("ten"),  10);
  });
});

/*var test = function (a,b,c) {
  console.log('it should add "' + a + '" to "' + b + '": ',
  add(a, b) === c);
};

numLet.forEach(function(a, i){
    numLet.forEach(function(b, j){
      test(a, b, i + j);
  });
});

for (var j = 1; j <= 10; j++){
  for (var i = 0; i < numLet.length; i++){
    print(numLet[j], numLet[i], j+i);
  }
};*/
