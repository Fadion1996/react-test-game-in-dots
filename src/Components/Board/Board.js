import React from 'react';

import css from './board.module.css';

const Board = () => (
  <div className={css.board}>
    <p>Leader Board</p>
    <ul>
      <li>
        <span>User name</span>
        <span>Date and Time</span>
      </li>
    </ul>
  </div>
);

export default Board;
