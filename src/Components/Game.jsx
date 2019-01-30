import React from 'react';
import Board from './Board';
import '../index.css';

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>big changes</div>
            <ol>
              <li>line item</li>
            </ol>
          </div>
        </div>
      );
    }
}
export default Game;