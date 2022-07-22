import React from "react";
import { useSelector } from "react-redux";

export function LetterDisplay() {
    let currentLetter = useSelector((state) => state.letter.value);
    return (
        <div>
            <h1>{currentLetter}</h1>
        </div>
    );
}
