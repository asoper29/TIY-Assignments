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

function convertToNumbers(x){
  if(x === "one"){ return 1; }
  if(x === "two"){ return 2; }
  if(x === "three"){ return 3; }
  if(x === "four"){ return 4; }
  if(x === "five"){ return 5; }
}

var add = function(a, b) {
  a = convertToNumbers(a);
  b = convertToNumbers(b);

  return a + b;

  if (a === "one"){
    if (b === "zero"){
      return 1;
    }
    if (b === "one"){
      return 2;
    }
    if (b === "two"){
      return 3;
    }
  }
  if (a === "two"){
    if (b === "two") {
      return 4;
    }
  }
  if (a === "three"){
    if (b === "one"){
      return 4;
    }
    if (b === "two"){
      return 5;
    }
  }
}

console.log('it should add "one" and "zero": ',
   add("one", "zero") === 1);
console.log('it should add "one" and "one": ',
  add("one", "one") === 2);
console.log('it should add "one" and "two": ',
add("one", "two") === 3);
console.log('it should add "two" and "zero": ',
add("two","zero") === 2);
console.log('it should add "two" and "one": ',
add("two","one") === 3);
console.log('it should add "two" and "two": ',
add("two","two") === 4);
console.log('it should add "three" and "zero": ',
add("three", "zero") === 3);
console.log('it should add "three" and "one": ',
add("three", "one") === 4);
console.log('it should add "three" and "two": ',
add("three","two") === 5);
