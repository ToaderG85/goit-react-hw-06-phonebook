import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector,useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);
  const availableContacts = contacts.filter((element) => element.name.includes(currentFilter));


  return (
    <div className={style.contact__list}>
      <h4 className={style.contacts__title}>Contacts</h4>
      <ul>
      {availableContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                {' '}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};