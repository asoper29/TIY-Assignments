var Chess = require('./game.js');
var Position = require('./game.js');
var Piece = require('./game.js');

var assert = require('chai').assert;
var expect = require('chai').expect;
var chess = new Chess;


it('should return "Queen"', function(){
  assert.equal(chess.Q.getName(), "Queen");
});
it('should return "black"', function(){
  assert.equal(chess.Q.getColor(), "Black")
})
it('should return "R" for "Black Rook"', function(){
  assert.equal(chess.R1.toString(), "R")
})
it('should return "n" for "White Knight"', function(){
  assert.equal(chess.n1.toString(), "n")
})
it('chess.k.getName should equal "King"', function(){
  expect(chess.k.getName()).to.equal("King");
})
it('should give me an "x = 0" and "y = 4" for Black Queen', function(){
  assert.deepEqual(chess.Q.position, [0 , 4])
})
// it('should move P1 to "[3][0]" and clear its original position', function(){
//   assert.deepEqual(chess.move([1,0],[3,0]) [0])
// })
// console.log(chess)

// console.log(chess.board)
chess.opening();
// console.log(chess.board)
// console.log(chess.Q)
// console.log(chess.K)

// console.log(chess.Q.Position)
