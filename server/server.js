const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
