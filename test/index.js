const board = [
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['o', 'x', 'o']
]

var runIt = (board, i = 0) =>
  i > 2
    ? "Cats Game"
    : board[i][0] == board[i][1] && board[i][0] == board[i][2]
      ? board[i][0] + " Wins"
      : board[0][i] == board[1][i] && board[0][i] == board[2][i]
        ? board[0][i] + " Wins"
        : (board[0][0] == board[1][1] && board[0][0] == board[2][2]) || (board[0][2] == board[1][1] && board[0][2] == board[2][0])
          ? board[1][1] + " Wins"
          : runIt(board, ++i);

console.log('----')
console.log(runIt(board)) //'X wins'
console.log('----')

// horizontal: 0, 1, 2 
// vertical: 0, 6, 9
// diagonal: 6





