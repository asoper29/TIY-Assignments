//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var assert = require('chai').assert;

function solution(){
  return {
    solveFor: function(input){
      var sum = 0;
      for(var num = 0; num < input; num++){
        if (num % 5 === 0 || num % 3 === 0){
          sum += num;
        }
      }
      return sum;
    } //END solveFor
  } //END return
} //END solution

describe('solution().solveFor', function(){
  it('should take "1000" and return "233168"', function(){
    assert.equal(solution().solveFor(1000), 233168);
  });
});
