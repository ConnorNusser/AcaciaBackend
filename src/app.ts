import express from 'express';
import openAiRoutes from '../routes/openai';
const app = express();
const port = 8000;
console.log(require("dotenv").config())
console.log("hi");
require('dotenv').config();
console.log(process.env.OPENAI_API_KEY)
app.get('/', (req, res) => res.send("Hello from homepage"));
app.use('/getfeedinfo', openAiRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});