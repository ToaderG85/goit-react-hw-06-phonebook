import React from "react";

import ContactFilter from "./ContactFilter/ContactFilter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { getContacts } from "redux/selectors";


export const App = () => {
 const contacts = useSelector(getContacts) 

  return (
    <div
      style={{
        height: '100vh',       
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        width: 400
      }}
    >
      <h2 
        style={{color: '#fff'}}>Phonebook</h2>
      <ContactForm/>
      {contacts.length > 0 && (
        <>
          <ContactFilter />
        </>
      )}
      
      <ContactList />      
    </div>
  );
};
