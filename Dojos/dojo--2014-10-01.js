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

 function num2letter(num) {
   var val = num.toString();

   if (num < 20){
     return ones[num];
   }
   if (num < 100){
     return tens[val[0]] + ones[val[1]];
   }
 }


function numToLet(num) {
  onesToTeens = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
  twentyToHundred = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]

  if (num.length = 1){
    return onesToTeens[num];
  }
  else if (num.length = 2){
    return "twenty";
  }

}



function test_num (a, b) {
  console.log('Should convert ' + a + ' to ' + b + ': ',
  numToLet(a) === b);
}

test_num(9, "nine");
test_num(30,"thirty");
