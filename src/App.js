import React from 'react';
import css from './App.module.css';
import { Game, Board } from './Components';

function App() {
    return (
        <div className={css.App}>
            <Game />
            <Board />
        </div>
    );
}

export default App;
