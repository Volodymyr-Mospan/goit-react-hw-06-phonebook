import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', newContact => {
  return {
    payload: {
      id: nanoid(10),
      name: newContact.name,
      number: newContact.number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('filter/changeFilter');
