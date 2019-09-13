import React from 'react';
import GameMenu from './GameMenu/GameMenu';
import GameContent from './GameContent/GameContent';

import css from './game.module.css';

const Game = () => (
    <div className={css.game}>
        <GameMenu />
        <GameContent />
    </div>
);

export default Game;
