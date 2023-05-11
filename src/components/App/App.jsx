// import React, { Component } from 'react';
// import Notiflix from 'notiflix';
// import { Container } from 'components/Container/Container';
// import { Section } from 'components/Section/Section';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactsList } from 'components/ContactList/ContactList';
// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
// import { GlobalStyle } from '../../style/GlobalStyle';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       // console.log('Обновились контакты');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ id, name, number }) => {
//     const newContact = { id, name, number };
//     this.setState(({ contacts }) => {
//       if (
//         this.state.contacts.find(
//           contact =>
//             contact.name.toLowerCase() === newContact.name.toLowerCase()
//         )
//       ) {
//         console.log('Уже есть');
//         Notiflix.Report.info(
//           'INFO',
//           `${newContact.name} already in the phonebook`
//         );
//         return;
//       } else if (
//         this.state.contacts.find(
//           contact => contact.number === newContact.number
//         )
//       ) {
//         console.log('НОМЕР есть');
//         Notiflix.Report.info(
//           'INFO',
//           `${newContact.number} already in the phonebook`
//         );
//         return;
//       }
//       Notiflix.Notify.success(
//         `${newContact.name} This subscriber is added to the phone book`
//       );
//       return { contacts: [newContact, ...contacts] };
//     });
//   };

//   onFilter = e => {
//     console.log(e.target.value);
//     this.setState({
//       filter: e.target.value,
//     });
//   };

//   onFilterContacts = () => {
//     let contactsFilter = [];

//     if (this.state.filter) {
//       console.log(this.state.filter);

//       contactsFilter = this.state.contacts.filter(
//         contact =>
//           contact.name.includes(this.state.filter) ||
//           contact.name.toLowerCase().includes(this.state.filter)
//       );
//     } else {
//       return this.state.contacts;
//     }

//     return contactsFilter;
//   };

//   onDelete = (id, name) => {
//     Notiflix.Confirm.show(
//       'Confirm',
//       ` Do You want to delete a ${name}?`,
//       'Yes',
//       'No',
//       () => {
//         this.setState(prevState => ({
//           contacts: prevState.contacts.filter(contact => contact.id !== id),
//         }));
//       },
//       () => {},
//       {
//         titleColor: '#ce6214',
//         titleFontSize: '20px',
//         messageColor: '#1e1e1e',
//         messageFontSize: '20px',
//       }
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <>
//         <Container>
//           <Section title="Phonebook">
//             <ContactForm onSubmit={this.addContact} contacts={contacts} />
//           </Section>
//           <Section title="Contacts ">
//             {this.state.contacts.length !== 0 && (
//               <ContactFilter
//                 filter={filter}
//                 onFilter={this.onFilter}
//                 dis={this.state.contacts.length <= 4}
//               />
//             )}

//             <ContactsList
//               contacts={this.onFilterContacts()}
//               onDelete={this.onDelete}
//             />
//           </Section>
//         </Container>
//         <GlobalStyle />
//       </>
//     );
//   }
// }
