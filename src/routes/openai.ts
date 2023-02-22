import express from 'express';
import { OpenApiKey } from '../app';
import { Configuration, OpenAIApi } from "openai";
const router = express.Router();
const configuration = new Configuration({
    organization: "org-qRPRbD0Nm3qbT9gVq9ccynM1",
    apiKey: OpenApiKey,
});
const openai = new OpenAIApi(configuration);



const feedObj = [
    {
        "prompt": "content"
    }]


router.get('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-babbage-001",
        prompt: `Hi how's it going?`,
        max_tokens: 7,
        temperature: 0,
      });
    res.send(response.data);
});

export default router;