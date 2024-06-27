const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json(newContact);
});

router.put('/:id', async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedContact);
});

router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
});

module.exports = router;
