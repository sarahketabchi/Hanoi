function drawBoard(board) {
  $("#board td").removeClass();

  for (var c = 0; c < board.length; c++) {
    for (var r = 0; r < board[c].length; r++) {
      // if there's a disc in this cell we manipulate it's class.
      if (board[c][r] !== undefined){
        var cell = "#row"+r+"col"+c;
        var disc = "disc"+board[c][r];
        $(cell).addClass(disc);
      };
    };
  };
};

function play(){
  drawBoard(hanoi.board);

  while(!hanoi.victory()){

    var invalidInput = true;
    while(invalidInput){
      var fromInput = prompt("From which col? (0, 1, or 2)");
      var toInput = prompt("To which col? (0, 1, or 2)");

      if(hanoi.checkMove(fromInput, toInput)){
        invalidInput = false;
      } else {
        alert("Invalid move. Enter a new move");
      };
    };

    hanoi.makeMove(fromInput, toInput);
    drawBoard(hanoi.board);
  };

  // Do the victory dance
  $("#carlton").show();
}
var hanoi = hanoiGame();
play();