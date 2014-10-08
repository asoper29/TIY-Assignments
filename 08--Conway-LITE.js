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
  /*for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      newBoard.push(conway(board[i][j], neighborsOf(board, i, j)));
    }
  }*/
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
//
// function test(actual, expected, success){
//     if (success === undefined) success = 'Success!';
//     assert.strictEqual(actual, expected);
//     console.log(success);
// }

describe('neighborsOf', function(){
  it('should return an array of neighbor values given a cell', function(){
    assert.deepEqual(neighborsOf(board, 0, 0), ([board[0][1], board[1][0], board[1][1]]));
  });
});

//FORMATTING FOR TICK TEST EXPERTLY ENGINEERED BY ARI
// function tick_test(board) {
//   var after = tick(board)
//   console.log("-----------------------");
//   console.log(board);
//   console.log("-----------------------");
//   console.log(after);
//   console.log("-----------------------");
// }

//TEST VARIABLES AND BOARDS
var actual1 = neighborsOf(board, 0, 0)
var actual2 = neighborsOf(board, 0, 1)
var actual3 = neighborsOf(board, 0, 2)
var actual4 = neighborsOf(board, 1, 0)
var actual5 = neighborsOf(board, 1, 1)
var actual6 = neighborsOf(board, 1, 2)
var actual7 = neighborsOf(board, 2, 0)
var actual8 = neighborsOf(board, 2, 1)
var actual9 = neighborsOf(board, 2, 2)
var conway1 = conway(board[0][0], actual1)
var conway2 = conway(board[0][1], actual2)
var conway3 = conway(board[0][2], actual3)
var conway4 = conway(board[1][0], actual4)
var conway5 = conway(board[1][1], actual5)
var conway6 = conway(board[1][2], actual6)
var conway7 = conway(board[2][0], actual7)
var conway8 = conway(board[2][1], actual8)
var conway9 = conway(board[2][2], actual9)
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



//TESTS
// tick_test(board);
// tick_test(board2);
// tick_test(board3);
// tick_test(board4);
// tick_test(board5);
// tick_test(board6);
// tick_test(board7);
