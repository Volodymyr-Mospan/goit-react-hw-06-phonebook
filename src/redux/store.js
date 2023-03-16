import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
