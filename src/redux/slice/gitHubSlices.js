import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action for repos
export const fetchUserReposAction = createAsyncThunk(
    "repos/list",
    async (user, { rejectWithValue, getState, dispatch }) => {
        try {
            // make request to github api
            const { data } = await axios.get(
                `https://api.github.com/users/${user}/repos?per_page=10`
            );
            return data;
        } catch (error) {
            if (!error?.response) throw error;
            return rejectWithValue(error?.response);
        }
    }
);

// Action for user profile
export const fetchUserProfileAction = createAsyncThunk(
    "profile",
    async (user, { rejectWithValue, getState, dispatch }) => {
        try {
            // make request to github api
            const { data } = await axios.get(
                `https://api.github.com/users/${user}`
            );
            return data;
        } catch (error) {
            if (!error?.response) throw error;
            return rejectWithValue(error?.response);
        }
    }
);

export const fetchUserOrganisationAction = createAsyncThunk(
    "organisation",
    async (user, { rejectWithValue, getState, dispatch }) => {
        try {
            // make request to github api
            const { data } = await axios.get(
                `https://api.github.com/users/${user}/orgs`
            );
            return data;
        } catch (error) {
            if (!error?.response) throw error;
            return rejectWithValue(error?.response);
        }
    }
);

const repoSlices = createSlice({
    name: "repos",
    initialState: { user: "hamicch" },
    extraReducers: (builder) => {
        builder.addCase(fetchUserReposAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUserReposAction.fulfilled, (state, action) => {
            state.loading = false;
            state.repos = action?.payload;
        });
        builder.addCase(fetchUserReposAction.rejected, (state, action) => {
            state.loading = false;
            state.repos = undefined;
            state.error = action?.payload;
        });

        builder.addCase(fetchUserProfileAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUserProfileAction.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action?.payload;
            state.error = undefined;
        });
        builder.addCase(fetchUserProfileAction.rejected, (state, action) => {
            state.loading = false;
            state.profile = undefined;
            state.error = action?.payload;
        });
        builder.addCase(
            fetchUserOrganisationAction.pending,
            (state, action) => {
                state.loading = true;
            }
        );
        builder.addCase(
            fetchUserOrganisationAction.fulfilled,
            (state, action) => {
                state.loading = false;
                state.organisation = action?.payload;
            }
        );
        builder.addCase(
            fetchUserOrganisationAction.rejected,
            (state, action) => {
                state.loading = false;
                state.organisation = undefined;
                state.error = action?.payload;
            }
        );
    },
});

// Export reducer
export default repoSlices.reducer;
