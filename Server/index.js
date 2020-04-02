const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',router);

app.listen(PORT,()=>console.log(`app listen to port ${PORT}`));