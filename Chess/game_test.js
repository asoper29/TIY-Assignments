var Chess = require('./game.js');
var Position = require('./game.js');
var Piece = require('./game.js');

var assert = require('chai').assert;
var expect = require('chai').expect;
var chess = new Chess;


it('should return "King"', function(){
  assert.equal(chess.pieces[0].getName(), "King");
 });
it('should return "Black"', function(){
  assert.equal(chess.pieces[0].getColor(), "Black")
})
it('should return "R" for "Black Rook"', function(){
  assert.equal(chess.pieces[4].toString(), "R")
})
it('should return "r" for "White Rook"', function(){
  assert.equal(chess.pieces[5].letter, "r")
})
it('chess.k.getName should equal "King"', function(){
  expect(chess.pieces[0].getName()).to.equal("King");
})
it('should give me an "x = 5" and "y = 5" for Black Queen', function(){
  assert.deepEqual(chess.pieces[2].position, [5 , 5])
})
it('should display the Final Position', function (){
  assert.equal(chess.display(),
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   |   | R | K |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   | B |   |   |   |   | P |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   | P |   |   | P |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| P |   |   |   | p |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| q |   |   |   |   |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| p |   |   |   | b | Q | p |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   | p |   |   |   |   |   | p |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| r |   |   |   |   |   | k |   |\n" +
          "+---+---+---+---+---+---+---+---+\n"
        );
});


chess.fullGame();
