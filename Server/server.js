const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PeopleRouter = require('./routes/People')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/', PeopleRouter);







const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})