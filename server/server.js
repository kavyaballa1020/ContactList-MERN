const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contactRoutes');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
