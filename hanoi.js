function hanoiGame() {

  var board = [[3,2,1], [],[]];
  var numberOfDiscs = 3;

  function makeMove(from, to) {
    board[to].push(board[from].pop());
  };

  function checkMove(from, to) {
    if (board[from].length === 0) {
      return false;
    } else if (board[to].length === 0) {
      return true;
    } else if (board[from][board[from].length - 1] > board[to][board[to].length - 1]) {
      return false;
    } else {
      return true;
    };
  };

  function victory(){
    return checkTower(board[1]) || checkTower(board[2]);

    function checkTower (tower) {
      return tower.length === numberOfDiscs;
    }
  };

  return {
    board: board,
    makeMove: makeMove,
    checkMove: checkMove,
    victory: victory
  };

};

// function play() {
//   var game = hanoiGame();

//   while( !game.victory() ) {
//     // show board
//     // loop : getMove until valid move (check move)
//     // make move
//   }

// };


module.exports = {
  // hello_you: hello_you,
  // hello_you_all: hello_you_all
  hanoiGame: hanoiGame
};
