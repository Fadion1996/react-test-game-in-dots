import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import css from './gameMenu.module.css';

const GameMenu = ({
    players,
    setPlayers,
    playText,
    gameModes,
    setGameModes,
    mode,
    setMode,
    setActivePlayer,
    scoreComputer,
    scoreUser,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`http://starnavi-frontend-test-task.herokuapp.com/game-settings`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setGameModes(result);
            });
    }, []);

    const formatDate = date => {
        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        // TODO: change minutes and hours to the score!
        return `${scoreUser}:${scoreComputer}; ${day} ${monthNames[monthIndex]} ${year}`;
    };

    const handleSubmit = e => {
        if (!name) {
            toast.info('Enter Name');
        } else if (mode === 'Pick game mode') {
            toast.info('Choose game mode');
        } else {
            toast.success('If Player win send to Dashboard', players);
            // setPlayers(...players, avtivePlayer);
            setActivePlayer({
                id: Math.random(),
                winner: name,
                date: formatDate(new Date()),
            });
        }
    };

    return (
        <div className={css.gameMenu}>
            <div className={css.dropdown}>
                <button
                    className={isOpen ? css.active : css.standard}
                    type="submit"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {mode}
                </button>
                {isOpen && (
                    <div className={css.dropdown_list}>
                        {Object.keys(gameModes).map((item, i) => (
                            <p
                                className={
                                    mode !== item ? css.mode : css.activeMode
                                }
                                value={item}
                                onClick={() => {
                                    setMode(item);
                                    setIsOpen(false);
                                }}
                                key={i}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <input
                className={css.input}
                placeholder="Enter your name"
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <button className={css.button} type="submit" onClick={handleSubmit}>
                {playText}
            </button>
        </div>
    );
};

export default GameMenu;
