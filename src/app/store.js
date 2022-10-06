import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/UserSlice'
import SearchReducer from '../features/SearchSlice'
import FilterReducer from '../features/FilterSlice'
import TeamReducer from '../features/TeamSlice'

export const store = configureStore({
  reducer: {
    user: UserReducer,
    search: SearchReducer,
    filter: FilterReducer,
    team: TeamReducer,
  },
});
