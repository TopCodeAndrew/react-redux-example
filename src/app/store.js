import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import letterReducer from "../features/letter/letterSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        letter: letterReducer,
    },
});
