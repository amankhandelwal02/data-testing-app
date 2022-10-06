import { createSlice } from '@reduxjs/toolkit';

export const TeamSlice = createSlice({
  name: 'team',
  initialState: {
    team: [],
  },
  reducers: {
    set: (state, action) => {
      // state.team = action.payload;
      state.team.push(action.payload);
    },
  },

});

export const { set } = TeamSlice.actions;

export const selectTeam = (state) => state.team.team;

export default TeamSlice.reducer;

