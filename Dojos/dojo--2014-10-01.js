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

var checkEnd = 0;

var dollars = 0;

function roundTen(number){
  return Math.round(number/10)*10;
};

function sliceNum(number){
  return number.slice(-1);
};

var ones = {0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six',
            7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Eleven', 12: 'Twelve',
            13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen',
            18: 'Eighteen', 19: 'Nineteen'};

var tens = {0: '', 10: 'Ten', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', 50: 'Fifty',
            60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety'};

var hundreds = 'Hundred'

var thousands = 'Thousand'


function toEnglish(val){
  val = Number(val).toFixed(2);
  var checkEnd = ' ' + val.slice(-2) + '/100 Dollars';
  var dollars = val.slice(0,-3);

    if (dollars < 20){
      return ones[dollars] + checkEnd;
    }
    else if (dollars < 100) {
      if (dollars % 10 === 0) {
        return tens[dollars] + checkEnd;
      } else {
        return tens[roundTen(dollars)] + ' ' + ones[sliceNum(dollars)] + checkEnd;
      }
    }
    // else if (dollars < 1000) {
    //   if (dollars % 100 === 0) {
    //     return hundreds[val[0]] + "dollars and " + cents + "/100 cents";
    //   }
    //   else if (dollars % 10 === 0) {
    //     return hundreds[val[0]] + tens[val[1]] + "dollars and " + cents + "/100 cents";
    //   }
    //   else if (val[1] < 2) {
    //     return hundreds[val[0]] + teens[val[2]] + " dollars and " + cents + "/100 cents";
    //   } else {
    //     return hundreds[val[0]] + tens[val[1]] + ones[val[2]] + " dollars and " + cents + "/100 cents";
    //   }
    // }
    // else if (dollars < 10000) {
    //   if (dollars % 1000 === 0) {
    //     return thousands[val[0]] + "dollars and " + cents + "/100 cents";
    //   }
    //   else if (dollars % 100 === 0) {
    //     return thousands[val[0]] + hundreds[val[1]] + "dollars and " + cents + "/100 cents";
    //   }
    //   else if (dollars % 10 === 0) {
    //     return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + "dollars and " + cents + "/100 cents";
    //   }
    //   else if (val[2] < 2) {
    //     return thousands[val[0]] + hundreds[val[1]] + teens[val[3]] + " dollars and " + cents + "/100 cents";
    //   } else {
    //     return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]] + " dollars and " + cents + "/100 cents";
    //   }
}

// Test Code
//

var assert = require('chai').assert;

describe('toEnglish()', function() {
  it('should convert "0" to "Zero" ', function() {
     assert.equal(toEnglish(0), 'Zero 00/100 Dollars');
  });
  it('should convert "20" to "Twenty" ', function() {
     assert.equal(toEnglish(20), 'Twenty 00/100 Dollars');
  });
  it('should convert "24" to "Twenty Four" ', function() {
     assert.equal(toEnglish(24), 'Twenty Four 00/100 Dollars');
  });
})


// describe('num2letter()', function() {
//   it('should convert "0" to "zero" ', function() {
//     assert.equal(num2letter(0), 'zero' + suffix + cents + testCents);
//   });
//   it('should convert "5" to "five" ', function() {
//     assert.equal(num2letter(5), 'five' + suffix + cents + testCents);
//   });
//   it('should convert "15" to "fifteen" ', function() {
//     assert.equal(num2letter(15), 'fifteen' + suffix + cents + testCents);
//   });
//   it('should convert "20" to "twenty" ', function() {
//     assert.equal(num2letter(20), 'twenty' + suffix + cents + testCents);
//   });
//   it('should convert "99" to "ninety nine" ', function() {
//     assert.equal(num2letter(99), 'ninety nine' + suffix + cents + testCents);
//   });
//   it('should convert "100" to "one hundred" ', function() {
//     assert.equal(num2letter(100), 'one hundred' + suffix + cents + testCents);
//   });
//   it('should convert "200" to "two hundred" ', function() {
//     assert.equal(num2letter(200), 'two hundred' + suffix + cents + testCents);
//   });
//   it('should convert "550" to "five hundred fifty" ', function() {
//     assert.equal(num2letter(550), 'five hundred fifty' + suffix + cents + testCents);
//   });
//   it('should convert "999" to "nine hundred ninety nine" ', function() {
//     assert.equal(num2letter(999), 'nine hundred ninety nine' + suffix + cents + testCents);
//   });
//   it('should convert "1000" to "one thousand" ', function() {
//     assert.equal(num2letter(1000), 'one thousand' + suffix + cents + testCents);
//   });
//   it('should convert "1100" to "one thousand one hundred" ', function() {
//     assert.equal(num2letter(1100), 'one thousand one hundred' + suffix + cents + testCents);
//   });
//   it('should convert "1110" to "one thousand one hundred ten" ', function() {
//     assert.equal(num2letter(1110), 'one thousand one hundred ten' + suffix + cents + testCents);
//   });
//   it('should convert "5000" to "five thousand" ', function() {
//     assert.equal(num2letter(5000), 'five thousand' + suffix + cents + testCents);
//   });
//   it('should convert "9999" to "nine thousand nine hundred ninety nine" ', function() {
//     assert.equal(num2letter(9999), 'nine thousand nine hundred ninety nine' + suffix + cents + testCents);
//   });
//   it('should convert "1234.56" to "one thousand twu hundred thirty four and 56/100" ', function() {
//     assert.equal(num2letter(1234.56), 'one thousand two hundred thirty four' + suffix + cents + testCents);
//   });
//   it('should convert "100.10" to "one hundred and 10/100" ', function() {
//     assert.equal(num2letter(100.10), 'one hundred' + suffix + cents + testCents);
//   });
//   it('should convert "500.05" to "five hundred and 05/100" ', function() {
//     assert.equal(num2letter(500.05), 'five hundred' + suffix + cents + testCents);
//   });
//   it('should convert "999.990" to "nine hundred ninety nine and 99/100" ', function() {
//     assert.equal(num2letter(999.990), 'nine hundred ninety nine' + suffix + cents + testCents);
//   });
// })
