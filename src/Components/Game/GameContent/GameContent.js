import React, { useEffect, useState, useRef } from 'react';

import css from './gameContent.module.css';
import GamePlay from './GamePlay/GamePlay';

let play;

const GameContent = ({
    gameModes,
    mode,
    scoreUser,
    activePlayer,
    setScoreUser,
    scoreComputer,
    setScoreComputer,
    setPlayText,
}) => {
    const [tiles, setTiles] = useState([]);
    const [size, setSize] = useState('230px');
    const [activeTile, setActiveTile] = useState(true);
    const [clicked, setClicked] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [stop, setStop] = useState(false);
    const prevTile = usePrevious({ activeTile });

    useEffect(() => {
        setTiles([]);
        if (gameModes[mode]) {
            const { field } = gameModes[mode];
            switch (field) {
                case 5:
                    setSize('230px');
                    break;
                case 10:
                    setSize('460px');
                    break;
                case 15:
                    setSize('690px');
                    break;
                default:
                    setSize('230px');
            }
            for (let i = 0; i < field * field; i++) {
                setTiles(oldArray => [...oldArray, { id: i }]);
            }
        } else {
            for (let i = 0; i < 25; i++) {
                setTiles(oldArray => [...oldArray, { id: i }]);
            }
        }
    }, [mode]);

    useEffect(() => {
        if (activePlayer.winner !== 'Message here') {
            const { delay, field } = gameModes[mode];
            setDisabled(false);
            clearInterval(play);

            if (!stop) {
                play = setInterval(() => {
                    setActiveTile(Math.round(Math.random() * field * field));
                    setClicked(true);
                }, delay);
                console.log('Begin Game!', delay);
            } else {
                console.log('Stop Game!');
                clearInterval(play);
                setDisabled(true);
            }
        }
    }, [activePlayer, stop]);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    useEffect(() => {
        if (prevTile) {
            if (scoreComputer >= 10 || scoreUser >= 10) {
                setStop(true);
                setPlayText('Play again');
            } else if (clicked !== prevTile.activeTile) {
                setScoreComputer(scoreComputer + 1);
            }
        }
    }, [activeTile]);

    const gameContent = {
        marginTop: '25px',
        width: size,
        height: size,
        border: '1px solid #ebebed',
        display: 'flex',
        justifyContent: 'center',
        margin: '25px auto',
        flexWrap: 'wrap',
    };

    return (
        <div className={css.content}>
            <p className={css.text}>
                {activePlayer.winner !== 'Message here'
                    ? scoreComputer >= 10
                        ? `${activePlayer.winner} loser / computer winner`
                        : ''
                    : scoreUser >= 10
                    ? `${activePlayer.winner} winner / computer loser`
                    : ''}
            </p>
            <p className={css.text}>{`${scoreUser} : ${scoreComputer}`}</p>
            <div className="gameContent" style={gameContent}>
                {tiles.map((item, index) => (
                    <GamePlay
                        tile={item}
                        key={index}
                        index={index}
                        activeTile={activeTile}
                        clicked={clicked}
                        setClicked={setClicked}
                        setScoreUser={setScoreUser}
                        setScoreComputer={setScoreComputer}
                        scoreUser={scoreUser}
                        scoreComputer={scoreComputer}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameContent;
