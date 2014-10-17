//0 //1 //2 //3 //4 //5 //6 //7

var board = [
['R','N','B','Q','K','B','N','R'],    //0
['P','P','P','P','P','P','P','P'],    //1
[' ',' ',' ',' ',' ',' ',' ',' '],    //2
[' ',' ',' ',' ',' ',' ',' ',' '],    //3
[' ',' ',' ',' ',' ',' ',' ',' '],    //4
[' ',' ',' ',' ',' ',' ',' ',' '],    //5
['p','p','p','p','p','p','p','p'],    //6
['r','n','b','q','k','b','n','r'] ];  //7

console.log(board.join('\n') + '\n\n');

var moves = {
  //White Queen's Pawn forward 2
  move1: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },

  //Black King's Knight over 1 down 2
  move2: function(){
    board[2][5] = board[0][6];
    board[0][6] = ' ';
  },

  //White Queen's Bishop's Pawn moves up 2
  move3: function(){
    board[4][2] = board[6][2];
    board[6][2] = ' ';
  },

  //Black King's Pawn moves forward 1
  move4: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  }

  //White King's Knight's Pawn moves forward 1
  move5: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  }

  //Black Queen's Pawn forward 2
  move6: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  }

  //White King's Bishop diagonal right 1
  move7: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  }

  //Black King's Bishop diagonal right 1
  move8: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  }

  //White King's Knight forward two left 1
  move9: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  }

  //Black King Pawn moves up 1
  step7: board[2][4] = board[1][4],
  step8: board[1][4] = ' ',

  //Black Queen's Pawn moves up 2
  step3: board[3][3] = board[1][3],
  step4: board[1][3] = ' ',

  //White Knight moves up 2 over 1
  step5: board[5][5] = board[7][6],
  step6: board[7][6] = ' ',



  //White Knight Pawn moves up 1
  step9: board[5][6] = board[6][6],
  step10: board[6][6] = ' ',

  //Black Bishop moves down and left 1
  step11: board[1][4] = board[0][5],
  step12: board[0][5] = ' ',

  //White Bishop's Pawn moves up 2
  step13: board[4][2] = board[6][2],
  step14: board[6][2] = ' ',




  //White Bishop moves up and right 1
  step17: board[6][6] = board[7][5],
  step18: board[7][5] = ' '
}
