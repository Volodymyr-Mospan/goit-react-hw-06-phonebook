import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducer';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
