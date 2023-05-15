// import React, { Component } from 'react';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { GlobalStyle } from '../../style/GlobalStyle';

export default function AppHook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = ({ id, name, number }) => {
    const newContact = { id, name, number };

    setContacts([...contacts]);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      console.log('Уже есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.name} already in the phonebook`
      );
      return;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      console.log('НОМЕР есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.number} already in the phonebook`
      );
      return;
    }
    Notiflix.Notify.success(
      `${newContact.name} This subscriber is added to the phone book`
    );

    return setContacts(prev => [newContact, ...prev]);
  };

  const onFilter = e => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const onFilterContacts = () => {
    let contactsFilter = [];

    if (filter) {
      contactsFilter = contacts.filter(
        contact =>
          contact.name.includes(filter) ||
          contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }

    return contactsFilter;
  };

  const onDelete = (id, name) => {
    Notiflix.Confirm.show(
      'Confirm',
      ` Do You want to delete a ${name}?`,
      'Yes',
      'No',
      () => {
        setContacts(prevState =>
          prevState.filter(contact => contact.id !== id)
        );
      },
      () => {},
      {
        titleColor: '#ce6214',
        titleFontSize: '20px',
        messageColor: '#1e1e1e',
        messageFontSize: '20px',
      }
    );
  };
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts ">
          {contacts.length !== 0 && (
            <ContactFilter
              filter={filter}
              onFilter={onFilter}
              dis={contacts.length <= 4}
            />
          )}

          <ContactsList contacts={onFilterContacts()} onDelete={onDelete} />
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}
