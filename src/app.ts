import express from 'express';
import openAiRoutes from './routes/openai';
const app = express();
const port = 8000;
require('dotenv').config();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
app.get('/', (req, res) => res.send("Hello from homepage"));
app.use('/getfeedinfo', openAiRoutes);