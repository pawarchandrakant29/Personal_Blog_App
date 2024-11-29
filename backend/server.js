const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
