import express from 'express';
import openAiRoutes from './routes/openai';
const app = express();
const port = 8000;
require('dotenv').config();
app.get('/', (req, res) => res.send("Hello from 2323homepage"));
app.use('/getfeedinfo', openAiRoutes);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export const OpenApiKey = process.env.OpenAi_API_KEY;
console.log(OpenApiKey);
