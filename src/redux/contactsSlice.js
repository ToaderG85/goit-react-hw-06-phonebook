import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsInitialState = {
    contacts: [],
    filter: ""
  }

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state,action) {
                state.contacts.push(action.payload)
            },
            prepare(contact) {
                return{
                    payload: {
                        name: contact.name,
                        number: contact.number,
                        id: nanoid(),
                    },
                };               
            },        
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(
              contact => contact.id !== action.payload
            );
          },
        filterContact(state, action) {
            state.filter = action.payload;
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  };
  
  export const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
  );

export const { addContact,deleteContact,filterContact } = contactsSlice.actions;
