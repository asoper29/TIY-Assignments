//DECLARING INITIAL BOARD STATE
board = [
  [ false, false, false ],
  [ false, false, false ],
  [ false, false, false ],
]

/*CONWAY FUNCTION - CHECKS NEIGHBORS OF A CELL AND DETERMINES
                    IF THE CELL SHOULD BE ALIVE OR DEAD*/
var cellState = false;
function conway(cell, neighbors){
  var liveCells = 0;
  neighbors.forEach(function(value, index){
    if (value === true) {
      liveCells++;
    }
  if (cell === true) {
    if (liveCells < 2) {
      cellState =false;
      }
    else if (liveCells < 4) {
      cellState = true;
    }
    else if (liveCells > 3) {
      cellState = false;
    }
  } else {
    if (liveCells === 3) {
      cellState = true;
    } else {
      cellState = false;
    }
  }
 });
  return cellState;
}

//DECLARING THE NEIGHBORS OF A CELL
var neighbors = [];
function neighborsOf(board, x, y) {
  if (x === 0 && y === 0) {
    neighbors = [board[0][1], board[1][0], board[1][1]];
  }
  if (x === 0 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[1][1],
    board[1][2], board[0][2]];
  }
  if (x === 0 && y === 2) {
    neighbors = [board[0][1], board[1][1], board[1][2]];
  }
  if (x === 1 && y === 0) {
    neighbors = [board[0][0], board[0][1], board[1][1],
    board[2][1], board[2][0]];
  }
  if (x === 1 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[2][0],
    board[0][1], board[2][1], board[0][2], board[1][2],
    board[2][2]]
  }
  if (x === 1 && y === 2) {
    neighbors = [board[0][1], board[0][2], board[1][1],
    board[2][1], board[2][2]]
  }
  if (x === 2 && y === 0) {
    neighbors = [board[1][0], board[1][1], board[2][1]]
  }
  if (x === 2 && y === 1) {
    neighbors = [board[2][0], board[1][0], board[1][1],
    board[1][2], board[2][2]]
  }
  if (x === 2 & y === 2) {
    neighbors = [board[2][1], board[1][1], board[1][2]]
  }
  return neighbors;
}

neighbors.forEach(conway);

//TICK FUNCTION TO ADVANCE THE BOARD
function tick(board){
  var newBoard = [];
  
  board.forEach(function(value, index){
      value.forEach(function(x, y){
         newBoard.push(conway(board[index][y], neighborsOf(board, index, y)));
      });
  });

  var row1 = newBoard.splice(0, 3);
  var row2 = newBoard.splice(0, 3);
  board = [row1, row2, newBoard];
  return board;
}


// TEST FUNCTION
var assert = require('assert');


describe('neighborsOf', function(){
  it('should return an array of neighbor values given a cell', function(){
    assert.deepEqual(neighborsOf(board, 0, 0), ([board[0][1], board[1][0], board[1][1]]));
  });
});

describe('conway', function(){
  it('should return the value of a cell based on its neighbors', function(){
    assert.equal(conway(board[0][0], [board[0][1], board[1][0], board[1][1]]), false);
  });
});

describe('tick', function(){
  it('should return a new board after applying rules from conway', function(){
    assert.deepEqual(tick([
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
    ]), tick(board2));
  })
})

//TEST VARIABLES AND BOARDS

var board2   = [
                [false, false, false],
                [false, true , false],
                [false, false, false],
                ]
var board3   = [
                [false, false, false],
                [false, true,  false],
                [false, true,  false],
                ]
var board4   = [
                [true,  false, false],
                [false, true,  false],
                [false, false,  true],
                ]
var board5   = [
                [false, true, false],
                [false, true, false],
                [false, true, false],
                ]
var board6   = [
                [false, true, false],
                [true,  true,  true],
                [false, true, false],
                ]
var board7   = [
                [true, true, true],
                [true, true, true],
                [true, true, true],
                ]
