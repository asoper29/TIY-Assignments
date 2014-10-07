// Function Definition
function foo(){
}

// Function Invocation
foo();

//Asignment Operators
foo = 'bar';

//Strict Equal Comparison Operator
foo === 'bar';

/** === Production Code === **/

function toEnglish(value){
  var ones = ['one','two','three'];
  /**
  * Variable
  * ==========
  * name: ones
  * value: array
  *
  * Operator
  * ==========
  * name: Assignment
  * symbol: =
  * operands:
  * - Variable: ones
  * - Array
  *
  * Type Literal
  * ==========
  * name: Array
  * symbol: [ ]
  *
  * Keyword
  * ==========
  * name: Variable Declaration
  * symbol: var
  *
  */

  return ones[value - 1];
}

/** === Test Code === **/

var assert = require('assert');

function test(actual, expected, message){
  assert.strictEqual(toEnglish(actual), expected);

  console.log('pass: ' + actual + ' >> ' + expected);
}

assert(toEnglish);
var testCases = [
  [0, 'zero'],
  [1, 'one'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
];

for (var index = 0; index < testCases.length; index++){
  test(testCases[index][0], testCases[index][1]);
}


test(0, 'zero');
test(1, 'one');
test(2, 'two');
test(3, 'three');
test(4, 'four');
