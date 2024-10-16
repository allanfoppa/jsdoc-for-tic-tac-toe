/**
 * @fileoverview Description of file Board.js
 * @namespace Board
 */

import { Square } from "./Square";
import { calculateWinner } from "../common/calculate-winner";

/**
 * Renders the game board for a Tic-Tac-Toe game.

 * @memberof Home
 * @param {boolean} xIsNext - Indicates whether it's player X's turn (true) or player O's turn (false).
 * @param {Array<string|null>} squares - An array representing the game board, where each element is either "X", "O", or null.
 * @param {function} onPlay - A callback function to be called when a player makes a move.
 * @returns {JSX.Element} The rendered Board component.
 */
export const Board = ({ xIsNext, squares, onPlay }) => {

  /**
   * Handles the click event on a square of the Tic-Tac-Toe game board.

   * @memberof Board
   * @function handleClick
   * @param {number} i - The index of the square that was clicked.
   * @returns {void}
   */
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
