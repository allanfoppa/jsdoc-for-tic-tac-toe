/**
 * @fileoverview Calculates the winner of a Tic-Tac-Toe game based on the current board state.

 * @module calculateWinner
 * @param {Array<string|null>} squares - An array representing the game board, where each element is either "X", "O", or null.
 * @returns {string|null} The winning player's symbol ("X" or "O") if there is a winner, otherwise null.
 */
export const calculateWinner = (squares) => {

  /**
   * An array of all possible winning lines in Tic-Tac-Toe.
   * @type {Array<Array<number>>}
   */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const occupiedAllThreeSquares =
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c];

    // always use braced blocks for the containing code, even if the body contains only a
    // single statement. The first statement of a non-empty block must begin on its own line.
    if (occupiedAllThreeSquares) {
      return squares[a];
    }
  }

  return null;
}
