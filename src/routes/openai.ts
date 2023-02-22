import express from 'express';
import { Configuration, OpenAIApi } from "openai";
const router = express.Router();
const OpenApiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
    organization: "org-qRPRbD0Nm3qbT9gVq9ccynM1",
    apiKey: OpenApiKey,
});
const openai = new OpenAIApi(configuration);



const feedObj = [
    {
        "prompt": "content"
    }]


router.get('/getfeedinfo', async (req, res) => {
    console.log("hi");
    console.log(process.env.OPENAI_API_KEY)
    const response = await openai.createCompletion({
        model: "text-babbage-001",
        prompt: `Hi how's it going?`,
        max_tokens: 7,
        temperature: 0,
      });
    res.send(response.data);
});

export default router;