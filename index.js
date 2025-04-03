const express = require('express');

const app = express();
const PORT = 8000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const routes = require('./routes/index');

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server of Kantin runs on port ${PORT}`);
});
