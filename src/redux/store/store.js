import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "../slice/gitHubSlices";

const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
});

export default store;
