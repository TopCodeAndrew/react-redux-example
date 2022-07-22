import React from "react";
import { useDispatch } from "react-redux";
import { changeLetter } from "./letterSlice";

export function Letter() {
    let dispatch = useDispatch();
    return (
        <div>
            <input
                onChange={(e) => {
                    dispatch(changeLetter(e.target.value));
                }}
            />
        </div>
    );
}
