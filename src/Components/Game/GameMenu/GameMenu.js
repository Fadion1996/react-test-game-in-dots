import React, { useState, useEffect } from 'react';

import css from './gameMenu.module.css';

const GameMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [mode, setMode] = useState('Pick game mode');
    const [gameModes, setGameModes] = useState([]);

    useEffect(() => {
        fetch(`http://starnavi-frontend-test-task.herokuapp.com/game-settings`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setGameModes(result);
            });
    }, []);

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
            <button className={css.button} type="submit">
                Play
            </button>
        </div>
    );
};

export default GameMenu;
