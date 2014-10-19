/*
@constructor Chess: Setup a board with Pieces representing an initial chessboard.
  @method getPlayer()
    @return String either "White" or "black" representing current player
  @method move(piece, destination): Move piece to destination and...?
    @param Piece piece to move
      @param Position destination to move piece to
  @method opening(): Advance the board to Catalan Opening, Closed Variation
  @method display()
    @return String representation of board
        R,N,B,Q,K,B,N,R
        P,P,P,P,P,P,P,P
         , , , , , , ,
         , , , , , , ,
         , , , , , , ,
         , , , , , , ,
        p,p,p,p,p,p,p,p
        r,n,b,q,k,b,n,r
@constructor Position(x,y): Represent a position on a chessboard with coordinates
  usage: new Position(1,1)
    @property Number x coordinate
    @property Number y coordinate
@constructor Piece(name, color): Represent a chesspiece on the board with name and color and appropriate starting position
  usage: new Piece('Queen', 'black')
  @method getName()
    @return String name of Piece, e.g. 'Queen', 'Pawn'
  @method getColor():
    @return String player 'black' or 'white'
  @method setPosition(position): Set Piece to position on board
    @param Position position
  @method toString()
    @return String representation of Piece
      example: "Q" === String(new Piece("Queen", "white"))
      example: "r" === String(new Piece("Rook", "black"))
*/

//module.exports = Game;

// var _ = require('lodash');
//
// // var boardBegin = [
// //   R = {
// //     name: 'Rook',
// //     color: 'black',
// //     position: [[0,0],[0,7]]
// //   }
// // ]
//
// var lodash = require('lodash');
//
/*
var boardBegin = [
  R = {
    name: 'Rook',
    color: 'black',
    position: [[0,0],[0,7]]
  },

  B = {
    name: 'Bishop',
    color: 'black',
    position:
  },
  N = {
    name: 'Knight',
    color: 'black',
    position:
  },
  K = {
    name: 'King',
    color: 'black',
    position:
  },
  Q = {
    name: 'Queen',
    color: 'black',
    position:
  },
  P = {
    name: 'Pawn',
    color: 'black',
    position:
  },
  r = {
    name: 'Rook',
    color: 'white',
    position: [[0,0],[0,7]]
  },

  b = {
    name: 'Bishop',
    color: 'white',
    position:
  },
  n = {
    name: 'Knight',
    color: 'white',
    position:
  },
  k = {
    name: 'King',
    color: 'white',
    position:
  },
  q = {
    name: 'Queen',
    color: 'white',
    position:
  },
  p = {
    name: 'Pawn',
    color: 'white',
    position:
  },
];

*/
//
// var pieces = [];
// console.log(pieces);
//
// function Piece(name, color){
//  this.name = name;
//  this.color = color;
//  this.setPosition;
// }//END Piece
//
// //var Q = new Piece('Queen', 'black' );
// //console.log(Q);
//
// boardBegin.forEach(function(value, index){
//   pieces.push(boardBegin[index] = new Piece(boardBegin[index].name, boardBegin[index].color));
//   //console.log(value.position = boardBegin[index].position);
//   //console.log(Rook);
// });
//
// console.log(lodash.identity(R));
//

module.exports = Chess, Position, Piece;


var points = {
  pawn: 1,
  bishop: 3,
  knight: 3,
  rook: 5,
  queen: 9
}



function Chess(){
  pieces = [];
  moveTotal = 0;
  pieces.push(this.Q = new Piece('Queen', 'Black'));
  this.Q.setPosition([0,4]);
  pieces.push(this.q = new Piece('Queen', 'White'));
  this.q.setPosition([7,4]);
  pieces.push(this.K = new Piece('King', 'Black'));
  this.K.setPosition([0,3]);
  pieces.push(this.k = new Piece('King', 'White'));
  this.k.setPosition([7,3]);
  pieces.push(this.P1 = new Piece('Pawn', 'Black'));
  this.P1.setPosition([1,0]);
  pieces.push(this.P2 = new Piece('Pawn', 'Black'));
  this.P2.setPosition([1,1])
  pieces.push(this.P3 = new Piece('Pawn', 'Black'));
  this.P3.setPosition([1,2])
  pieces.push(this.P4 = new Piece('Pawn', 'Black'));
  this.P4.setPosition([1,3]);
  pieces.push(this.P5 = new Piece('Pawn', 'Black'));
  this.P5.setPosition([1,4]);
  pieces.push(this.P6 = new Piece('Pawn', 'Black'));
  this.P6.setPosition([1,5]);
  pieces.push(this.P7 = new Piece('Pawn', 'Black'));
  this.P7.setPosition([1,6]);
  pieces.push(this.P8 = new Piece('Pawn', 'Black'));
  this.P8.setPosition([1,7]);
  pieces.push(this.p1 = new Piece('Pawn', 'White'));
  this.p1.setPosition([6,0]);
  pieces.push(this.p2 = new Piece('Pawn', 'White'));
  this.p2.setPosition([6,1]);
  pieces.push(this.p3 = new Piece('Pawn', 'White'));
  this.p3.setPosition([6,2]);
  pieces.push(this.p4 = new Piece('Pawn', 'White'));
  this.p4.setPosition([6,3]);
  pieces.push(this.p5 = new Piece('Pawn', 'White'));
  this.p5.setPosition([6,4]);
  pieces.push(this.p6 = new Piece('Pawn', 'White'));
  this.p6.setPosition([6,5]);
  pieces.push(this.p7 = new Piece('Pawn', 'White'));
  this.p7.setPosition([6,6]);
  pieces.push(this.p8 = new Piece('Pawn', 'White'));
  this.p8.setPosition([6,7]);
  pieces.push(this.B1 = new Piece('Bishop', 'Black'));
  this.B1.setPosition([0,2]);
  pieces.push(this.B2 = new Piece('Bishop', 'Black'));
  this.B2.setPosition([0,5]);
  pieces.push(this.b1 = new Piece('Bishop', 'White'));
  this.b1.setPosition([7,2]);
  pieces.push(this.b2 = new Piece('Bishop', 'White'));
  this.b2.setPosition([7,5]);
  pieces.push(this.N1 = new Piece('Knight', 'Black'));
  this.N1.setPosition([0,1]);
  pieces.push(this.N2 = new Piece('Knight', 'Black'));
  this.N2.setPosition([0,6]);
  pieces.push(this.n1 = new Piece('Knight', 'White'));
  this.n1.setPosition([7,1]);
  pieces.push(this.n2 = new Piece('Knight', 'White'));
  this.n2.setPosition([7,6]);
  pieces.push(this.R1 = new Piece('Rook', 'Black'));
  this.R1.setPosition([0,0]);
  pieces.push(this.R2 = new Piece('Rook', 'Black'));
  this.R2.setPosition([0,7]);
  pieces.push(this.r1 = new Piece('Rook', 'White'));
  this.r1.setPosition([7,0]);
  pieces.push(this.r2 = new Piece('Rook', 'White'));
  this.r2.setPosition([7,7]);

}//END Chess



Chess.prototype.getPlayer = function(pieces){
  if(pieces === pieces.toLowerCase()){
     return 'White';
  }
     return 'Black';
}

//@param Piece piece to move
//@param Position destination to move piece to
//Move piece to destination and...?
Chess.prototype.move = function (piece, destination){
  moveTotal++
  pieces.forEach(function(value, index){
    if (pieces[index].position[0] === piece[0] && pieces[index].position[1] === piece[1]){

      pieces[index].position = destination;

      console.log('Move ' + moveTotal + ': ' + pieces[index].color + ' ' + pieces[index].name + ' to '+ destination);
      console.log(Chess.prototype.display());
    }
  })
}

Chess.prototype.opening = function (){
  this.move([6,3],[4,3]);
  this.move([0,6],[2,5]);
  this.move([6,2],[4,2]);
  this.move([1,4],[2,4]);
  this.move([6,6],[5,6]);
  this.move([1,3],[3,3]);
  this.move([7,5],[6,6]);
  this.move([0,5],[1,4]);
  this.move([7,6],[5,5]);
}

Chess.prototype.display = function(){
  Array.matrix = function(numrows, numcols, initial){
     var arr = [];
     for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
           columns[j] = initial;
        }
        arr[i] = columns;
      }
      return arr;
  }

  var board = Array.matrix(8,8,0);

  pieces.forEach(function(value, index){
    var x = pieces[index].position[0];
    var y = pieces[index].position[1];
    board[x][y] = pieces[index].toString();
  })
  var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        board.map(function renderRow(row){
          return '| ' +
              row.map(function renderPosition(position){
                    if(position === 0){
                      return ' ';
                    }
                    else{
                      return position;
                    }
              }).join(' | ')
          + ' |\n';
        }).join(spacer)
    + spacer;
}




//Represent a position on a chessboard with coordinates
function Position(x, y) {
  this.x = x;
  this.y = y;
  return [x,y];
}//END Position

function Piece(name, color){
  this.name = name;
  this.color = color;
  this.letter = this.toString()
}//END Piece

//@return String name of Piece, e.g. 'Queen', 'Pawn'
Piece.prototype.getName = function (){
  return this.name;
}

//@return String player 'black' or 'White'
Piece.prototype.getColor = function (){
  return this.color;
}

//@param Position position
Piece.prototype.setPosition = function (position){
  this.position = position;
}

//@return String representation of Piece
Piece.prototype.toString = function (){
  if( this.name === "Queen") {
    if(this.color === "Black") {
      return "Q";
    } else {
      return "q"
    }
  }
  if( this.name === "Bishop") {
    if(this.color === "Black") {
      return "B"
    } else {
      return "b"
    }
  }
  if( this.name === "Rook") {
    if(this.color === "Black") {
      return "R"
    } else {
      return "r"
    }
  }
  if( this.name === "King") {
    if(this.color === "Black") {
      return "K"
    } else {
      return "k"
    }
  }
  if( this.name === "Knight") {
    if(this.color === "Black") {
      return "N"
    } else {
      return "n"
    }
  }
  if( this.name === "Pawn") {
    if(this.color === "Black") {
      return "P"
    } else {
      return "p"
    }
  }
}

// TEST CODE

var assert = require('chai').assert;
