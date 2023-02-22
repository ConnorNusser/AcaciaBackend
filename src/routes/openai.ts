import express from 'express';
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const configuratonCreate = () => {
    const configuration = new Configuration({
        apiKey: process.env.OpenAPIKEY,
    });
    const openai = new OpenAIApi(configuration);
    return openai;
}

const feedObj = [
    {
        "prompt": "content"
    }]


router.get('/', async (req, res) => {
    const openai = configuratonCreate();
    const response = await openai.createCompletion({
        model: "text-babbage-001",
        prompt: `Hi how's it going?`,
        max_tokens: 7,
        temperature: 0,
      });
    res.send(response.data);
});

export default router;