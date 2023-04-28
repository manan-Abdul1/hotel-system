const express = require('express');

const app = express();

const dbconfig = require('./db');
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/rooms' , roomRoutes);
app.use('/api/users' , userRoutes);

const port = process.env.port || 5000;
app.listen(port, ()=> console.log("server started"))