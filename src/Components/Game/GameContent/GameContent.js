import React from 'react';

import css from './gameContent.module.css';
import GamePlay from './GamePlay/GamePlay';
import tiles from './gameTiles';

const GameContent = () => (
    <div className={css.content}>
        <p className={css.text}>Message here</p>
        <div className={css.gameContent}>
            {tiles.map(item => (
                <GamePlay tile={item} key={item.id} />
            ))}
        </div>
    </div>
);

export default GameContent;
