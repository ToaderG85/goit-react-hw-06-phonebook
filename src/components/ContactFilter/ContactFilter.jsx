import React from 'react';
import { nanoid } from 'nanoid';
import style from './ContactFilter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/contactsSlice';

export default function ContactFilter() {
    const filterID = nanoid();
    const dispach = useDispatch();
    const currentFilter = useSelector(getFilter);

    return (
      <div className={style.contact__filter}>
        <label htmlFor={filterID}>
          Find contact (name)
          <input
            type="text"
            name="filter"
            onChange={(event) => dispach(filterContact(event.currentTarget.value))}
            value={currentFilter}
            id={filterID}
          />
        </label>
      </div>
    );
}

