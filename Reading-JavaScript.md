#05--Reading-JavaScript

```javascript
var result = []
```
* Variable: result
* Value: array []


```javascript
// some constants for frequently used strings
```
* Code Comment

```javascript
var dFactor = (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2)
```

* Variable: dFactor
* Value: (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2)
* Numbers: Integers (4, 2, 1, 3, 2)
* Operators: *, -, /
* Math: Math.sqrt


```javascript
docMode8 = doc.documentMode === 8,
```

* Variable: docMode8
* Value: doc.documentMode === 8
* Property Access = .documentMode
* Operators: = and ===

```javascript
DIV = 'div',
ABSOLUTE = 'absolute',
```
* Variable: DIV
* Value: String 'div'
* Variable: ABSOLUTE
* Value: String 'absolute'


```javascript
for (i = 0; i < len; i++)
```
* Loops: for loop
* Variable: i
* Operators: =, <, ++ (postfix increment)

```javascript
if (args[0] === true) {
  ret = args[1];
  args = Array.prototype.slice.call(args, 2);
}
```
* Conditional: If statement
* Array: args[0]
* Comparison operator: ===

```javascript
multiples = [1, 2, 2.5, 5, 10];
```
* Variable: multiples
* Value: array [1, 2, 2.5, 5, 10]
* Integers: 1, 2, 5, 10
* Floats: 2.5

```javascript
defaultPrevented = true
```

* Variable: defaultPrevented
* Value: Boolean true

```javascript
updateShadows: function (key, value)
```

* Variable: updateShadows
* Value: function 
* Arguments: (key, value)


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


```javascript
for (i = 0; i < length; i++) {
	arg = args[i];
```
* Loops: for loop
* Variable: i
* Operators: =, <, ++
* (start at 0, end when i < args.length, increment i)


```javascript
interval *= magnitude;
```
* Variable: interval, magnitude
* Value: interval = interval * magnitude

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


```javascript
var assert = require('assert');
```

* Variable: assert
* Value: require('assert')
* (call 'assert' from library)

```javascript
if (container.chartistSvg !== undefined)
```
* Conditional: if
* Condition: container.chartistSvg !== (not equal to) undefined

```javascript
var array = [];
```

* Variable: array
* Value: [];

```javascript
if (dataArray[i][j] > highLow.high) {
            highLow.high = dataArray[i][j]
```

* Conditional: if
* Condition: (dataArray[i][j] > highLow.high)
* Statement: highLow.high = dataArray[i][j]
* Multi-dimensional Array: dataArray[i][j]

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

```javascript
 if(toTheRight && direction === 'explode' ||
          !toTheRight && direction === 'implode') {
          return 'start';
```

* Conditional: if
* Conditions: toTheRight && direction === 'explode' || !toTheRight && direction === 'implode'
* Boolean Logical Operators: && (and) || (or)
* Statement: return 'start'
