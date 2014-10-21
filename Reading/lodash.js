//Naive Implementations of Lo-Dash
function testSome(test){
  var testArr = [0,1,2,3,false,'true'];
  for (var i = 0; i < testArr.length; i++) {
    if (testArr[i] === test){
      return true;
      break;
    } else {
      return false;
    }
  }
}

testSome('false');

//Messing Around with Lo-Dash and Chess
var _ = require('lodash')


var pieces = [];

var collection = [
  [this.K,  'King'  , 'Black',0,4]  , [this.k,  'King'  , 'White',7,4],
  [this.Q,  'Queen' , 'Black',0,3]  , [this.q,  'Queen' , 'White',7,3],
  [this.R1, 'Rook'  , 'Black',0,0]  , [this.r1, 'Rook'  , 'White',7,0],
  [this.R2, 'Rook'  , 'Black',0,7]  , [this.r2, 'Rook'  , 'White',7,7],
  [this.N1, 'Knight', 'Black',0,1]  , [this.n1, 'Knight', 'White',7,1],
  [this.N2, 'Knight', 'Black',0,6]  , [this.n2, 'Knight', 'White',7,6],
  [this.B1, 'Bishop', 'Black',0,2]  , [this.b1, 'Bishop', 'White',7,2],
  [this.B2, 'Bishop', 'Black',0,5]  , [this.b2, 'Bishop', 'White',7,5],
  [this.P1, 'Pawn'  , 'Black',1,0]  , [this.p1, 'Pawn'  , 'White',6,0],
  [this.P2, 'Pawn'  , 'Black',1,1]  , [this.p2, 'Pawn'  , 'White',6,1],
  [this.P3, 'Pawn'  , 'Black',1,2]  , [this.p3, 'Pawn'  , 'White',6,2],
  [this.P4, 'Pawn'  , 'Black',1,3]  , [this.p4, 'Pawn'  , 'White',6,3],
  [this.P5, 'Pawn'  , 'Black',1,4]  , [this.p5, 'Pawn'  , 'White',6,4],
  [this.P6, 'Pawn'  , 'Black',1,5]  , [this.p6, 'Pawn'  , 'White',6,5],
  [this.P7, 'Pawn'  , 'Black',1,6]  , [this.p7, 'Pawn'  , 'White',6,6],
  [this.P8, 'Pawn'  , 'Black',1,7]  , [this.p8, 'Pawn'  , 'White',6,7],
]

function Piece(name, color){
  this.name = name;
  this.color = color;
}//END Piece

Piece.prototype.setPosition = function (position){
  this.position = position;
}

_(collection).forEach(function(piece, index){
    pieces.push(piece[0] = new Piece(piece[1], piece[2]))
    piece[0].setPosition([piece[3], piece[4]])
})


function identify(name){
  _.some(pieces,function(item){
    if (item.name === name){
     console.log(_.identity(item));
    }
  })
}

//Test Code
var assert = require('chai').assert

describe('_.some', function(){
  it('should cycle through each element of an array and return true if any element of an arry passes the callback function', function(){
    assert.equal(_.some([null, 0, 'yes', false], Boolean), true);
  })
})

describe('_.identity', function(){
  it('"identify" should be a function', function(){
    assert.isFunction(identify)
  })
  it('should identify the "King" as an object', function(){
    assert.isObject(_.identity(pieces[0]))
  })
})
