import React from 'react';

import css from './board.module.css';

const Board = () => (
    <div className={css.board}>
        <p className={css.title}>Leader Board</p>
        <ul className={css.list}>
            <li className={css.item}>
                <span className={css.name}>User name</span>
                <span className={css.score}>Date and Time</span>
            </li>
        </ul>
    </div>
);

export default Board;
