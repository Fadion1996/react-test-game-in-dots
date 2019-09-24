import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { Game, Board } from './Components';

function App() {
    const [players, setPlayers] = useState([]);
    toast.configure();

    useEffect(() => {
        fetch(`http://starnavi-frontend-test-task.herokuapp.com/winners`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setPlayers(result);
            });
    }, []);

    return (
        <div className={css.App}>
            <Game players={players} setPlayers={setPlayers} />
            <Board players={players} />
        </div>
    );
}

export default App;
