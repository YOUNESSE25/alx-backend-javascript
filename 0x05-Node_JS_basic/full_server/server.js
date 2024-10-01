/** Small Express Server
 *  # It should use the routes defined in
 *  full_server/routes/index.js
    # It should use the port 1245
 */
const express = require('express');

const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port);

export default app;
