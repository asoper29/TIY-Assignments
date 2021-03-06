module.exports = {'Chess':Chess, 'Position': Position, 'Piece': Piece};

function Chess(){

  this.pieces = [];
  this.moveTotal = 0;
  this.turn = 1;

  collection = [
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

  self = this;
  collection.forEach(function(piece, index){
      self.pieces.push(piece[0] = new Piece(piece[1], piece[2]))
      piece[0].setPosition([piece[3], piece[4]])
  })

}//END Chess



Chess.prototype.getPlayer = function(item){
  if(item === item.toLowerCase()){
     return 'White';
  }
     return 'Black';
}

//@param Piece piece to move
//@param Position destination to move piece to
//Move piece to destination and...?
Chess.prototype.move = function (piece, destination){
  if (self.moveTotal % 2 === 0 && self.moveTotal != 0){
    self.turn++
  };

  self.moveTotal++

  var points = {
    'King': 0,
    'Pawn': 1,
    'Bishop': 3,
    'Knight': 3,
    'Rook' : 5,
    'Queen': 9
  }

  var totalW = 0;
  var totalB = 0;

  self.pieces.some(function(_piece, index){
    if (_piece.position[0] === destination[0] && _piece.position[1] === destination[1]){
      self.pieces.splice(index, 1);
    }
  })

  self.pieces.forEach(function(_piece, index){
    if (_piece.color === 'White'){
      totalW += points[_piece.name];
    } else {
      totalB += points[_piece.name];
    }
  })

  self.pieces.some(function(_piece, index){
    if (_piece.position[0] === piece[0] && _piece.position[1] === piece[1]){
      _piece.position = destination

      console.log('Turn ' + self.turn + ': ' + self.getPlayer(_piece.letter) + ' ' + _piece.getName() + ' to '+ destination);
      console.log('Score: W - ' + totalW + ' / B - ' + totalB)
      console.log(Chess.prototype.display());
    }

  })

}

Chess.prototype.fullGame = function (){
  this.move([6,3],[4,3]);
  this.move([0,6],[2,5]);
  this.move([6,2],[4,2]);
  this.move([1,4],[2,4]);
  this.move([6,6],[5,6]);
  this.move([1,3],[3,3]);
  this.move([7,6],[5,5]);
  this.move([0,5],[1,4]);
  this.move([7,5],[6,6]);
  this.move([0,7],[0,5]); //Black Castling part 1
  this.move([0,4],[0,6]); //Black Castling part 2
  this.move([7,7],[7,5]); //White Castling part 1
  this.move([7,4],[7,6]); //White Castling part 2
  this.move([1,2],[2,2]);
  this.move([7,1],[6,3]);
  this.move([1,1],[2,1]);
  this.move([7,3],[6,2]);
  this.move([0,2],[1,1]);
  this.move([6,4],[4,4]);
  this.move([0,1],[2,0]);
  this.move([4,4],[3,4]);
  this.move([2,5],[1,3]);
  this.move([4,2],[3,3]);//White Pawn takes Black Pawn
  this.move([2,0],[4,1]);
  this.move([6,2],[5,1]);
  this.move([4,1],[3,3]);//Black Knight takes White Pawn
  this.move([6,3],[4,4]);
  this.move([1,7],[2,7]);
  this.move([7,2],[6,3]);
  this.move([2,2],[3,2]);
  this.move([4,3],[3,2]);//White Pawn takes Black Pawn
  this.move([1,3],[3,2]);//Black Knight takes White Pawn
  this.move([4,4],[3,2]);//White Knight takes Black Knight
  this.move([1,4],[3,2]);//Black Bishop takes White Kniht
  this.move([5,1],[4,0]);
  this.move([0,3],[1,4]);
  this.move([6,0],[5,0]);
  this.move([1,0],[3,0]);
  this.move([7,5],[7,4]);
  this.move([1,5],[3,5]);
  this.move([5,5],[4,7]);
  this.move([3,5],[4,5]);
  this.move([4,7],[2,6]);
  this.move([3,2],[6,5]);//Black Bishop takes White Pawn
  this.move([7,6],[7,7]);
  this.move([1,4],[1,5]);
  this.move([2,6],[0,5]);//White Knight takes Black Rook
  this.move([4,5],[5,5]);
  this.move([6,6],[5,7]);
  this.move([6,5],[7,4]);//Black Bishop takes White Rook
  this.move([6,3],[7,4]);//White Bishop takes Black Bishop
  this.move([5,5],[6,5]);
  this.move([7,4],[6,5]);//White Bishop takes White Pawn
  this.move([3,3],[4,5]);
  this.move([5,7],[6,6]);
  this.move([4,5],[6,6]);//Black Knight takes White Bishop
  this.move([7,7],[7,6]);
  this.move([0,0],[0,5]);
  this.move([6,5],[2,1]);//White Bishop takes Black Pawn
  this.move([6,6],[5,4]);
  this.move([2,1],[5,4]);//White Bishop takes Black Knight
  this.move([1,5],[5,5]);
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

  self.pieces.forEach(function(piece, index){
    var x = piece.position[0];
    var y = piece.position[1];
    board[x][y] = piece.letter;
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
Piece.prototype.toString = function(){
    if( this.name === "Rook") {
      return (this.color === "Black") ? "R" : "r";
    }
    if( this.name === "Knight") {
      return (this.color === "Black") ? "N" : "n";
    }
    if( this.name === "Bishop") {
      return (this.color === "Black") ? "B" : "b";
    }
    if( this.name === "Queen") {
       return (this.color === "Black") ? "Q" : "q";
    }
    if( this.name === "King") {
      return (this.color === "Black") ? "K" : "k";
    }
    if( this.name === "Pawn") {
      return (this.color === "Black") ? "P" : "p";
    }
}
