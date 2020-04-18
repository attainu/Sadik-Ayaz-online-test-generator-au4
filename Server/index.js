const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./router');
const connectDB = require('./database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


connectDB().then(() => {
    app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
})
