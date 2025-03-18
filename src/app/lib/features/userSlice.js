// features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload;
        },
        resetUserData: (state) => {
            state.data = initialState.data;
        },
    },
});

export const { setUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;
