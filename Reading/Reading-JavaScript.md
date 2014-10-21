#05--Reading-JavaScript

####1
```javascript
var result = []
```
* Variable: result
* Value: array []

####2
```javascript
// some constants for frequently used strings
```
* Code Comment

####3
```javascript
var dFactor = (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2)
```

* Variable: dFactor
* Value: (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2)
* Numbers: Integers (4, 2, 1, 3, 2)
* Operators: *, -, /
* Math: Math.sqrt

####4
```javascript
docMode8 = doc.documentMode === 8,
```

* Variable: docMode8
* Value: doc.documentMode === 8
* Property Access = .documentMode
* Operators: = and ===

####5
```javascript
DIV = 'div',
ABSOLUTE = 'absolute',
```
* Variable: DIV
* Value: String 'div'
* Variable: ABSOLUTE
* Value: String 'absolute'

####6
```javascript
for (i = 0; i < len; i++)
```
* Loops: for loop
* Variable: i
* Operators: =, <, ++ (postfix increment)

####7
```javascript
if (args[0] === true) {
  ret = args[1];
  args = Array.prototype.slice.call(args, 2);
}
```
* Conditional: If statement
* Array: args[0]
* Comparison operator: ===

####8
```javascript
multiples = [1, 2, 2.5, 5, 10];
```
* Variable: multiples
* Value: array [1, 2, 2.5, 5, 10]
* Integers: 1, 2, 5, 10
* Floats: 2.5

####9
```javascript
defaultPrevented = true
```

* Variable: defaultPrevented
* Value: Boolean true

####10
```javascript
updateShadows: function (key, value)
```

* Variable: updateShadows
* Value: function 
* Arguments: (key, value)

####11
```javascript
function pick() {
	var args = arguments,
		i,
		arg,
		length = args.length;
```
* Variable: pick
* Value: function ()
* Variable: args
* Value: Arguments (i, arg, length = args.length)

####12
```javascript
for (i = 0; i < length; i++) {
	arg = args[i];
```
* Loops: for loop
* Variable: i
* Operators: =, <, ++
* (start at 0, end when i < args.length, increment i)

####13
```javascript
interval *= magnitude;
```
* Variable: interval, magnitude
* Value: interval = interval * magnitude

####14
```javascript
if (this instanceof Bro) {
  this.obj = obj;
  } else {
   return new Bro(obj);
  }
}
```

* Conditional: if
* Condition: this instanceof Bro
* Statement: this.obj = obj;

####15
```javascript
var assert = require('assert');
```

* Variable: assert
* Value: require('assert')
* (call 'assert' from library)

####16
```javascript
if (container.chartistSvg !== undefined)
```
* Conditional: if
* Condition: container.chartistSvg !== (not equal to) undefined

####17
```javascript
var array = [];
```

* Variable: array
* Value: [];

####18
```javascript
if (dataArray[i][j] > highLow.high) {
            highLow.high = dataArray[i][j]
```

* Conditional: if
* Condition: (dataArray[i][j] > highLow.high)
* Statement: highLow.high = dataArray[i][j]
* Multi-dimensional Array: dataArray[i][j]

####19
```javascript
while (true) {
        var length = Chartist.projectLength(svg, bounds.step / 2, bounds, options);
        if (length >= options.axisY.scaleMinSpace) {
          bounds.step /= 2;
        } else {
          break;
        }
      }
```

* Loop: While
* Condition: true
* End loop: break;

####20
```javascript
 if(toTheRight && direction === 'explode' ||
          !toTheRight && direction === 'implode') {
          return 'start';
```

* Conditional: if
* Conditions: toTheRight && direction === 'explode' || !toTheRight && direction === 'implode'
* Boolean Logical Operators: && (and) || (or)
* Statement: return 'start'

####21
```javascript
  function chartType()
```
* function declaration 

####22
```javascript
  configs = {
  browserName: 'chrome',
};
```
* variable configs is assigned the value object literal with property browserName

####23
```javascript
  var assert = require('chai').assert;
```
* variable assert is assigned the value of function require input chai library with method assert

####24
```javascript
  var errors = [];
```
* variable errors is assigned the value of empty array

####25
```javascript
  describe('Solution().solveFor', function(){
  it('should take "1000" and return "233168"', function(){
    assert.equal(solution().solveFor(1000), 233168);
  });
});
```
* BDD test code. Describe the test and what it should return. Check if the expected value(solution().solveFor(1000) is
* equal to the actual value (233168)

####26
```javascript
  var msg = "fix($compile): something super mega extra giga tera long, maybe even longer and longer and longer... ";
```
* variable message is assigned the string value "..."

####27
```javascript
  var TYPES = {
  feat: true,
  fix: true,
  docs: true,
  style: true,
  refactor: true,
  perf: true,
  test: true,
  chore: true,
  revert: true
};
```
* variable TYPES set equal to object literal with properties feat, fix, docs, style, refactor, perf, test, chore,
* and revert

####28
```javascript
  if (!match) {
```
* condtional with the condition not equal to match

####29
```javascript
  var chessBoard = [
['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r']
];
```
* variable chessboard is assigned a multi-dimensional array

####30
```javascript
  var cash = value.slice(0,-3);
```
* value with method slice is assigned to the variable cash


####31
```javascript
  module.exports = function (grunt) {
```
* 

####32
```javascript
   grunt.initConfig({
```
* 

####33
```javascript
  Chartist.Bar = function (query, data, options, responsiveOptions) {
```
* 

####34
```javascript
  axisY: {
          offset: 15
         }
```
* 

####35
```javascript
  bar = seriesGroups[i].elem
```
* 

####36
```javascript
  function House(windows, doors) {
```
* 

####37
```javascript
  if(item === item.toLowerCase())
```
* 

####38
```javascript
  function Chess(){
```
* 

####39
```javascript
  collection.forEach(function(piece, index){
```
* 

####40
```javascript
  Chess.prototype.getPlayer = function(item){
```
* 

