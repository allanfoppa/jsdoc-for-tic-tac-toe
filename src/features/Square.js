/**
 * @fileoverview Defines a square component for a game board.
 * @namespace Square
*/

/**
 * Renders a square component on the game board.
 * @function Square
 * @memberof Board
 * @param {string|null} value - The value of the square (e.g., "X", "O", or null).
 * @param {function} onSquareClick - The event handler to be called when the square is clicked.
 * @returns {JSX.Element} The rendered square component.
*/
export const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
