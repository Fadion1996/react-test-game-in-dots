import React from 'react';

import css from './board.module.css';

const Board = ({ players }) => {
    return (
        <div className={css.board}>
            <p className={css.title}>Leader Board</p>
            <ul className={css.list}>
                {players.map((player, i) => {
                    return (
                        <li className={css.item} key={i}>
                            <span className={css.name}>{player.winner}</span>
                            <span className={css.score}>{player.date}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Board;
