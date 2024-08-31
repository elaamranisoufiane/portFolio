const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
require('dotenv').config();
app.use(express.json());

 
 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
