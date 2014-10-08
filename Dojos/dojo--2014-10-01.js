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

 var cents = 0;
 var dollars = 0;

function num2letter(val) {
    ones =     ["zero", "one", "two", "three", "four", "five",
                "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen",
                "sixteen", "seventeen", "eighteen", "nineteen"]

    tens =     ["zero", "ten ", "twenty ", "thirty ", "fourty ", "fifty ",
                "sixty ", "seventy ", "eighty ", "ninety "]

    teens =    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                "sixteen", "seventeen", "eighteen", "nineteen"]

    hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ",
                "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "]

    thousands = ["zero", "one thousand ", "two thousand ", "three thousand ", "four thousand ",
                 "five thousand ", "six thousand ", "seven thousand ", "eight thousand ", "nine thousand "]

    val = Number(val).toFixed(2);
    cents = val.slice(-2);
    dollars = val.slice(0, -3);

    if (dollars < 20){
      return ones[dollars] + " dollars and " + cents + "/100 cents";
    }
    else if (dollars < 100) {
      if (dollars % 10 === 0) {
        return tens[val[0]] + "dollars and " + cents + "/100 cents";
      } else {
        return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
      }
    }
    else if (dollars < 1000) {
      if (dollars % 100 === 0) {
        return hundreds[val[0]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 10 === 0) {
        return hundreds[val[0]] + tens[val[1]] + "dollars and " + cents + "/100 cents";
      }
      else if (val[1] < 2) {
        return hundreds[val[0]] + teens[val[2]] + " dollars and " + cents + "/100 cents";
      } else {
        return hundreds[val[0]] + tens[val[1]] + ones[val[2]] + " dollars and " + cents + "/100 cents";
      }
    }
    else if (dollars < 10000) {
      if (dollars % 1000 === 0) {
        return thousands[val[0]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 100 === 0) {
        return thousands[val[0]] + hundreds[val[1]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 10 === 0) {
        return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + "dollars and " + cents + "/100 cents";
      }
      else if (val[2] < 2) {
        return thousands[val[0]] + hundreds[val[1]] + teens[val[3]] + " dollars and " + cents + "/100 cents";
      } else {
        return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]] + " dollars and " + cents + "/100 cents";
      }
  }
  return cents;
}

// Test Code
//
// var testCases = [
//   [0, 'zero dollars and 00/100 cents'],
//   [5, 'five dollars and 00/100 cents'],
//   [15, 'fifteen dollars and 00/100 cents'],
//   [20, 'twenty dollars and 00/100 cents'],
//   [99, 'ninety nine dollars and 00/100 cents'],
//   [100, 'one hundred dollars and 00/100 cents'],
//   [200, 'two hundred dollars and 00/100 cents'],
//   [550, 'five hundred fifty dollars and 00/100 cents'],
//   [999, 'nine hundred ninety nine dollars and 00/100 cents'],
//   [1000, 'one thousand dollars and 00/100 cents'],
//   [1100, 'one thousand one hundred dollars and 00/100 cents'],
//   [1110, 'one thousand one hundred ten dollars and 00/100 cents'],
//   [5000, 'five thousand dollars and 00/100 cents'],
//   [9999, 'nine thousand nine hundred ninety nine dollars and 00/100 cents'],
//   [1234.56, 'one thousand two hundred thirty four dollars and 56/100 cents'],
//   [100.10, 'one hundred dollars and 10/100 cents'],
//   [500.05, 'five hundred dollars and 05/100 cents'],
//   [999.990, 'nine hundred ninety nine dollars and 99/100 cents']
// ];

var assert = require('assert');
var suffix = " dollars and "
var testCents = "/100 cents"

describe('num2letter()', function() {
  it('should convert "0" to "zero" ', function() {
    assert.equal(num2letter(0), 'zero' + suffix + cents + testCents);
    assert.equal(num2letter(5), 'five' + suffix + cents + testCents);
    assert.equal(num2letter(15), 'fifteen' + suffix + cents + testCents);
    assert.equal(num2letter(20), 'twenty' + suffix + cents + testCents);
    assert.equal(num2letter(99), 'ninety nine' + suffix + cents + testCents);
    assert.equal(num2letter(100), 'one hundred' + suffix + cents + testCents);
    assert.equal(num2letter(200), 'two hundred' + suffix + cents + testCents);
    assert.equal(num2letter(550), 'five hundred fifty' + suffix + cents + testCents);
    assert.equal(num2letter(999), 'nine hundred ninety nine' + suffix + cents + testCents);
  });
})


//
// testCases.forEach(function(testCase) {
//   var actual = num2letter(testCase[0]);
//   expected = testCase[1];
//   console.log('Number: ' + testCase[0] + ' was converted to "' + testCase[1] + '"');
//
//   assert.strictEqual(actual, expected);
// })

/*console.log(num2letter(0))
console.log(num2letter(5))
console.log(num2letter(15))
console.log(num2letter(20))
console.log(num2letter(99))
console.log(num2letter(100))
console.log(num2letter(200))
console.log(num2letter(550))
console.log(num2letter(999))
console.log(num2letter(1000))
console.log(num2letter(1100))
console.log(num2letter(1110))
console.log(num2letter(5000))
console.log(num2letter(5500))
console.log(num2letter(5550))
console.log(num2letter(9999))
console.log(num2letter(1234.56))
console.log(num2letter(100.10))
console.log(num2letter(200.5))
console.log(num2letter(300.900))
console.log(num2letter(400.33))
console.log(num2letter(500.54))
console.log(num2letter(1000.00))
console.log(num2letter(2000))
console.log(num2letter(3000))
console.log(num2letter(4000))
console.log(num2letter(5000))*/
