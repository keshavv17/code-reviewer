const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())

app.use('/ai', aiRoutes);

module.exports = app;