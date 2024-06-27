import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await axios.get('/contacts');
    setContacts(response.data);
  };

  const addContact = async (contact) => {
    const response = await axios.post('/contacts', contact);
    setContacts([...contacts, response.data]);
  };

  const updateContact = async (id, updatedContact) => {
    const response = await axios.put(`/contacts/${id}`, updatedContact);
    setContacts(contacts.map(contact => (contact._id === id ? response.data : contact)));
  };

  const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} updateContact={updateContact} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
