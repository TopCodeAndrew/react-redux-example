import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Letter } from "./features/letter/Letter";
import { LetterDisplay } from "./features/letter/LetterDisplay";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <Letter />
                <LetterDisplay />
            </header>
        </div>
    );
}

export default App;
