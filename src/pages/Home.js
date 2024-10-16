/**
 * @fileoverview Description of file Home.js. See {@tutorial history-of-tic-tac-toe}
 * @namespace Home
*/

import { useState } from 'react';
import { Board } from '../features/Board';

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  /**
   * Handles the play of a move in a game.

   * @function handlePlay
   * @memberof Home
   * @param {Array} nextSquares - The updated state of the game board after the move.
  */
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * Handles the event of jumping to a specific move in the game history.

   * @memberof Home
   * @param {number} nextMove - The index of the move to jump to.
  */
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  /**
   * Generates a list of buttons representing the game history.

   * @memberof Home
   * @method moves
   * @param {Array<Array<string|null>>} history - An array of game boards, representing the history of the game.
   * @param {number} currentMove - The index of the current move in the history.
   * @returns {JSX.Element[]} An array of JSX elements representing the list of move buttons.
  */
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

