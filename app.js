const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./api/routes/apiRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`));