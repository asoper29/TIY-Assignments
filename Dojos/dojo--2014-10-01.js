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
}


function test_convert(a, b) {
  console.log('Convert ' + a + ' to ' + numbersToLetters(a) + ' : ',
  numbersToLetters(a) === b);
}

test_convert(1, "one")
test_convert(2, "two")
test_convert(10, "ten")
test_convert(20, "twenty")
