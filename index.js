const express = require('express')
// get routes to the variable
const router = require('./src/routes');
const app = express()
const port = 4000

app.use(express.json());

// create andpoint grouping and router
app.use('/api/v1/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`))