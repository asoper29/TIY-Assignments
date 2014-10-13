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


function checkWriting(){
  var ones = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

  var tens = ["zero","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];

  var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"];

  var hundreds = " hundred";

  var thousands = " thousand";

  return {
    toEnglish : function(val){
      val = Number(val).toFixed(2);
      var checkEnd = ' ' + val.slice(-2) + '/100 Dollars';
      var dollars = val.slice(0,-3);

        if (dollars < 20) {
          return ones[dollars] + checkEnd;
        }
        if (dollars < 100) {
          if (dollars % 10 === 0) {
            return tens[dollars[0]] + checkEnd;
          } else {
            return tens[dollars[0]] + " " + ones[dollars[1]] + checkEnd;
          }
        }
        else if (dollars < 1000) {
          if (dollars % 100 === 0) {
            return ones[dollars[0]] + hundreds + checkEnd;
          }
          else if (dollars % 10 === 0) {
            return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + checkEnd;
          }
          else if (dollars[2] < 2) {
            return ones[dollars[0]] + hundreds + " "  + teens[dollars[2]] + checkEnd;
          } else {
            return ones[dollars[0]] + hundreds + " "  + tens[dollars[1]] + " " + ones[dollars[2]] + checkEnd;
          }
        }
        else if (dollars < 10000) {
          if (dollars % 1000 === 0) {
            return ones[dollars[0]] + thousands + checkEnd;
          }
          else if (dollars % 100 === 0) {
            return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + checkEnd;
          }
          else if (dollars % 10 === 0) {
            return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + " " + tens[dollars[2]] + checkEnd;
          }
          else if (dollars[2] < 2) {
            return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " " + teens[dollars[3]] + checkEnd;
          } else {
            return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " "  + tens[dollars[2]] + " " + ones[dollars[3]] + checkEnd;
          }
        }
     },
  }
}


// Test Code


var assert = require('chai').assert;

describe('checkWriting().toEnglish()', function() {
  it('should convert "0" to "zero"', function() {
     assert.equal(checkWriting().toEnglish(0), 'zero 00/100 Dollars');
  });
  it('should convert "20" to "twenty"', function() {
     assert.equal(checkWriting().toEnglish(20), 'twenty 00/100 Dollars');
  });
  it('should convert "24" to "twenty four"', function() {
     assert.equal(checkWriting().toEnglish(24), 'twenty four 00/100 Dollars');
  });
  it('should convert "100" to "one hundred"', function() {
     assert.equal(checkWriting().toEnglish(100), 'one hundred 00/100 Dollars');
  });
  it('should convert "1000" to "one thousand"', function() {
     assert.equal(checkWriting().toEnglish(1000), 'one thousand 00/100 Dollars');
  });
  it('should convert "550" to "five hundred fifty"', function() {
     assert.equal(checkWriting().toEnglish(550), 'five hundred fifty 00/100 Dollars');
  });
  it('should convert "9999" to "nine thousand nine hundred ninety nine"', function() {
     assert.equal(checkWriting().toEnglish(9999), 'nine thousand nine hundred ninety nine 00/100 Dollars');
  });
  it('should convert "1234.56" to "one thousand two hundred thirty four 56/100"', function() {
     assert.equal(checkWriting().toEnglish(1234.56), 'one thousand two hundred thirty four 56/100 Dollars');
  });
  it('should convert "50.50" to "fifty 50/100"', function() {
     assert.equal(checkWriting().toEnglish(50.50), 'fifty 50/100 Dollars');
  });
})
