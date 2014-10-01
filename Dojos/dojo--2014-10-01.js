/**
  * Check writing
  *
  *Given a number representing money -- $1234.56 -- convert
  * that into it's string representation in English words. For
  * example, 1234.56 is "one thousand, two hundred thirty four
  * and 56/100s", just like you would see on a check.
  *
  * In a lot of ways, this is the inverse of the "String Calculator"
  * problem, so a lot of what you've learned there will be put into
  * practice here, but backwards. Hooray!
  */

/**
 * Sample Data:
 *
 * 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * 123.45  => "one hundred twenty three and 45/100s"
 * 12.34   => "twelve and 34/100s"
 * 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * 12345678.90
 * "twelve million, three hundred forty five thousand,
 * six hundred seventy eight and 90/100s"

 * Make up your own, too.
 */
function numToLet(num) {
  numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"]
  return numbers[num];
}



function test_num (a, b) {
  console.log('Should convert ' + a + ' to ' + b + ': ',
  numToLet(a) === b);
}

test_num(3, "three");


/*  while (digits.length > 0) {
    if(digits[0] === 1) {
      ones = "one"
    }
  digits.shift();
  console.log(ones);
  }

}

convert(1);

function numbersToLetters(a){
  if(a === 1){ return "one"; }
  if(a === 2){ return "two"; }
  if(a === 3){ return "three"; }
  if(a === 4){ return "four"; }
  if(a === 5){ return "five"; }
  if(a === 6){ return "six"; }
  if(a === 7){ return "seven"; }
  if(a === 8){ return "eight"; }
  if(a === 9){ return "nine"; }
  if(a === 10){ return "ten"; }
  if(a === 11){ return "eleven"; }
  if(a === 12){ return "twelve"; }
  if(a === 13){ return "thirteen"; }
  if(a === 14){ return "fourteen"; }
  if(a === 15){ return "fifteen"; }
  if(a === 16){ return "sixteen"; }
  if(a === 17){ return "seventeen"; }
  if(a === 18){ return "eighteen"; }
  if(a === 19){ return "nineteen"; }
  if(a === 20){ return "twenty"; }
  if(a === 30){ return "thirty"; }
  if(a === 40){ return "fourty"; }
  if(a === 50){ return "fifty"; }
  if(a === 60){ return "sixty"; }
  if(a === 70){ return "seventy"; }
  if(a === 80){ return "eighty"; }
  if(a === 90){ return "ninety"; }
  if(a === 100){ return "one hundred"; }
}
*/
