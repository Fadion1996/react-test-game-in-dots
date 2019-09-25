import React, { useState } from 'react';
import GameMenu from './GameMenu/GameMenu';
import GameContent from './GameContent/GameContent';

import css from './game.module.css';

const Game = ({ players, setPlayers, score }) => {
    const [gameModes, setGameModes] = useState([]);
    const [mode, setMode] = useState('Pick game mode');
    const [playText, setPlayText] = useState('Play');
    const [activePlayer, setActivePlayer] = useState({
        winner: 'Message here',
    });
    const [scoreUser, setScoreUser] = useState(0);
    const [scoreComputer, setScoreComputer] = useState(0);

    return (
        <div className={css.game}>
            <GameMenu
                players={players}
                setPlayers={setPlayers}
                gameModes={gameModes}
                setGameModes={setGameModes}
                mode={mode}
                score={score}
                playText={playText}
                setMode={setMode}
                setActivePlayer={setActivePlayer}
                scoreUser={scoreUser}
                scoreComputer={scoreComputer}
            />
            <GameContent
                gameModes={gameModes}
                mode={mode}
                activePlayer={activePlayer}
                scoreUser={scoreUser}
                scoreComputer={scoreComputer}
                setScoreUser={setScoreUser}
                setScoreComputer={setScoreComputer}
                setPlayText={setPlayText}
            />
        </div>
    );
};

export default Game;
