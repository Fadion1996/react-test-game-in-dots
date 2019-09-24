import React, { useEffect } from 'react';

import css from './gamePlay.module.css';

const GamePlay = ({
    activeTile,
    index,
    setClicked,
    clicked,
    setScoreUser,
    setScoreComputer,
    scoreUser,
    scoreComputer,
    disabled,
}) => {
    const active = {
        background: activeTile === index && '#42d8e8',
        backgroundColor:
            clicked === activeTile
                ? index === activeTile && '#07e871'
                : index !== activeTile
                ? clicked === index && '#e85a5f'
                : activeTile === index && '#42d8e8',
    };

    useEffect(() => {
        if (clicked === index) {
            if (index === activeTile) {
                setScoreUser(scoreUser + 1);
            } else {
                setScoreComputer(scoreComputer + 1);
            }
        }
    }, [clicked]);

    return (
        <div
            className={css.gamePlay}
            style={active}
            onClick={() => !disabled && setClicked(index)}
        >
            <div className={css.tile} />
        </div>
    );
};

export default GamePlay;
