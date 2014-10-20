## Mutator methods

* These methods modify the array:

#### Array.prototype.copyWithin() - Experimental
```javascript
  arr.copyWithin(target, start[, end = this.length])
  
  [1, 2, 3, 4, 5].copyWithin(0, 3);
   // [4, 5, 3, 4, 5]

```
* Copies a sequence of array elements within the array and places them starting at 'target'.

#### Array.prototype.fill() - Experimental
```javascript
  arr.fill(value[, start = 0[, end = this.length]])
  
  [1, 2, 3].fill(4)               // [4, 4, 4]
```
* Fills the elements of an array with a static value from a start to an end index


#### Array.prototype.pop()
```javascript
  arr.pop()
  
  var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

  console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

  var popped = myFish.pop();

  console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

  console.log(popped); // 'sturgeon'
```
* Removes the last element of an array ('pops' it off) and then returns that element.
* In reference to the example, it takes the last element of the array, 'sturgeon', and removes it. It is then   
* returned when called (assigned to variable 'popped' and then called).

#### Array.prototype.push()
```javascript
  arr.push(element1, ..., elementN)
  
  var sports = ['soccer', 'baseball'];
  var total = sports.push('football', 'swimming');

  console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
  console.log(total);  // 4
```
  * Adds an element(s) onto the end of an array and then returns the new length of the array.

#### Array.prototype.reverse()
```javascript
  arr.reverse()
  
  var myArray = ['one', 'two', 'three'];
  myArray.reverse(); 

  console.log(myArray) // ['three', 'two', 'one']
```
  * Takes the first element of an array and makes it the first, and the first becomes the last (reverses the order of   * all the elements in the array).

#### Array.prototype.shift()
```javascript
  arr.shift()
  
  var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

  console.log('myFish before: ' + myFish);

  var shifted = myFish.shift();

  console.log('myFish after: ' + myFish);
  console.log('Removed this element: ' + shifted);
  This example displays the following:

  myFish before: angel,clown,mandarin,surgeon
  myFish after: clown,mandarin,surgeon
  Removed this element: angel

```
  * Opposite of pop. Removes the first element of the array and returns that value.

#### Array.prototype.sort()
```javascript
  arr.sort([compareFunction])
  
  var fruit = ['apples', 'bananas', 'Cherries'];
  fruit.sort(); // ['Cherries', 'apples', 'bananas'];

  var scores = [1, 2, 10, 21]; 
  scores.sort(); // [1, 10, 2, 21]

  var things = ['word', 'Word', '1 Word', '2 Words'];
  things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
  // In Unicode, numbers come before upper case letters, which come before lower case letters.

```
  * If `compareFunction` isn't specified, elements in the array are converted to strings and sorted by their Unicode
  * code point value. 

#### Array.prototype.splice()
```javascript
  array.splice(index, howMany[, element1[, ...[, elementN]]])
  
  // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
  // removes 1 element from index 3
  removed = myFish.splice(3, 1);
  // myFish is ['angel', 'clown', 'drum', 'surgeon']
  // removed is ['mandarin']
```
  * The splice method can be used to add or remove elements from an array. The `index` is the starting point for
  * the changes. `howMany` is the number of elements from the array to be removed. `elementN` are the elements to be
  * added to the array. If none are specified, then elements are only removed.
 
#### Array.prototype.unshift()
```javascript
  arr.unshift([element1[, ...[, elementN]]])
  
  var arr = [1, 2];

  arr.unshift(0); // result of call is 3, the new array length
  // arr is [0, 1, 2]

  arr.unshift(-2, -1); // = 5
  // arr is [-2, -1, 0, 1, 2]
```
  * Inserts the given values as new elements at the beginning of an array. `elementN` signifies the elements to be
  * added to the array. New length is returned after elements are added.


## Accessor methods
* These methods do not modify the array and return some representation of the array.

#### Array.prototype.contains() - Experimental
```javascript
  array.contains(searchElement[, fromIndex])
  
  [1, 2, 3].contains(2);     // true
  [1, 2, 3].contains(4);     // false
```
* Determines whether an array has an element and returns a boolean value

#### Array.prototype.toSource() - NOT STANDARD
```javascript
  arr.toSource()
  
  var alpha = new Array('a', 'b', 'c');

  alpha.toSource();   //returns ['a', 'b', 'c']
```
* Returns the value of the array 

#### Array.prototype.concat()
```javascript
  var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
  
  var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

  var alphaNumeric = alpha.concat(numeric);

  console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```
  * Creates a new array out of multiple old arrays and/or values. Combines the `alpha` and `numeric` arrays in the 
  * examples into the new `alphaNumeric` array.

#### Array.prototype.join()
```javascript
  str = arr.join([separator = ','])
  
  var a = new Array('Wind', 'Rain', 'Fire');
  var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
  var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
  var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
```
  * Combines all elements of an array into a string. The `seperator` specifies how a string will be seperated.

#### Array.prototype.slice()
```javascript
  arr.slice([begin[, end]])
  
  // Our good friend the citrus from fruits example
  var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  var citrus = fruits.slice(1, 3);

// citrus contains ['Orange','Lemon']
```
  * Extracts a section of an array and returns a new array. The elements extracted go from `begin` to `end` based on
  * index values.

#### Array.prototype.toString()
```javascript
  arr.toString()
  
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
  var myVar = monthNames.toString(); // assigns 'Jan,Feb,Mar,Apr' to myVar.
```
  * Converts the elements of an array into a string and returns the new value.

#### Array.prototype.toLocaleString()
```javascript
  arr.toLocaleString();
  
  var number = 1337;
  var date = new Date();
  var myArr = [number, date, 'foo'];

  var str = myArr.toLocaleString(); 

  console.log(str); 
  // prints '1.337,6.12.2013 19:37:35,foo'
  // if run in a German (de-DE) locale with timezone Europe/Berlin
```
  * Returns the elements of an array as a string representation using locale-specific String seperators
  * (e.g. comma or period).

#### Array.prototype.indexOf()
```javascript
  arr.indexOf(searchElement[, fromIndex = 0])
  
  var array = [2, 5, 9];
  var index = array.indexOf(2);
  // index is 0
  index = array.indexOf(7);
  // index is -1
  index = array.indexOf(9, 2);
  // index is 2
  index = array.indexOf(2, -1);
  // index is -1
  index = array.indexOf(2, -3);
  // index is 0
```
  * Searches an array starting at index `fromIndex` for an element `searchElement`. Compares the input to the elements
  * of an array using strict equality and returns the first index at which `searchElement` can be found, or -1 if it
  * can't be found.

#### Array.prototype.lastIndexOf()
```javascript
  arr.lastIndexOf(searchElement[, fromIndex = arr.length])
  
  var array = [2, 5, 9, 2];
  var index = array.lastIndexOf(2);
  // index is 3
  index = array.lastIndexOf(7);
  // index is -1
  index = array.lastIndexOf(2, 3);
  // index is 3
```
  * Does the same thing as indexOf, except it searches for the greatest index at which `searchElement` can be found.


## Iteration methods
* Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

#### Array.prototype.entries() - Experimental
```javascript
  arr.entries()
  
  var arr = ['a', 'b', 'c'];
  var eArr = arr.entries();
  
  console.log(eArr.next().value); // [0, 'a']
  console.log(eArr.next().value); // [1, 'b']
  console.log(eArr.next().value); // [2, 'c']
```
* The entries method returns a new array iterator that contains the key/value of the array element

#### Array.prototype.find() - Experimental
```javascript
  arr.find(callback[, thisArg])
  
  function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```
* Finds a value in an array and returns it if the element satisfies the provided function

#### Array.prototype.findIndex() - Experimental
```javascript
  arr.findIndex(callback[, thisArg])
  
  function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```
* Returns an index of an array if the element of that idex satisfies the provided function

#### Array.prototype.keys() - Experimental
```javascript
  arr.keys()
  
  var arr = ['a', 'b', 'c'];
  var eArr = arr.keys();
  
  console.log(eArr.next().value); // 0
  console.log(eArr.next().value); // 1
  console.log(eArr.next().value); // 2
```
* Creates a new array iterator that returns the index values of an array

#### Array.prototype.forEach()
```javascript
  arr.forEach(callback[, thisArg])
  
  function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }

  // Note ellision, there is no member at 2 so it isn't visited
  [2, 5, , 9].forEach(logArrayElements);
  // logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
```
  * Calls a function for each element in the array. Executes the provided `callback` for each element within the
  * array in ascending order.

#### Array.prototype.every()
```javascript
  arr.every(callback[, thisArg])
  
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  var passed = [12, 5, 8, 130, 44].every(isBigEnough);
  // passed is false
  passed = [12, 54, 18, 130, 44].every(isBigEnough);
  // passed is true
```
  * Will return true if every element of an array pass the test implemented by the provided function.

#### Array.prototype.some()
```javascript
  arr.some(callback[, thisArg])
  
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  var passed = [2, 5, 8, 1, 4].some(isBigEnough);
  // passed is false
  passed = [12, 5, 8, 1, 4].some(isBigEnough);
  // passed is true
```
  * Executes the callback function for each element of an array and returns true if any of the elements pass the
  * function.

#### Array.prototype.filter()
```javascript
  arr.filter(callback[, thisArg])
  
  function isBigEnough(element) {
    return element >= 10;
  }
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
```
  * Executes the callback function for each element in the array and the elements are filtered and a new array is 
  * created with the values which passed as true from the provided function.

#### Array.prototype.map()
```javascript
  arr.map(callback[, thisArg])
  
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);
  // roots is now [1, 2, 3], numbers is still [1, 4, 9]
```
  * Executes the callback function on each element in the array and returns a new array with the values after the
  * function was executed.

#### Array.prototype.reduce()
```javascript
  arr.reduce(callback[, initialValue])
  
  var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
  });
// total == 6
```
  * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a 
  * string value. In the example, 0 is added to 1 which equals 1. Then 1 is added to 2 which equals 3. Finally,
  * 3 is added to 3, giving you the total which equals 6.

#### Array.prototype.reduceRight()
```javascript
  arr.reduceRight(callback[, initialValue])
  
  var total = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
  });
  // total == 6
```
  * Performs the same function as reduce, but goes from right-to-left.
