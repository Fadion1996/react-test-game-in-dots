import React, { useState } from 'react';

import css from './gameMenu.module.css';

const GameMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');

    return (
        <div className={css.gameMenu}>
            <button
                className={css.dropdown}
                type="submit"
                onClick={() => setIsOpen(!isOpen)}
            >
                Pick game mode
            </button>
            {isOpen && (
                <div className={css.dropdown_list}>
                    <p>Easy</p>
                    <p>Medium</p>
                    <p>Hard</p>
                </div>
            )}
            <input
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
