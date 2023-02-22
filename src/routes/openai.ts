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

type openAiParams = {
    prompt: string,
    max_tokens: number
}
router.post('/', async (req, res) => {
    console.log(req);
    const promptInfo = req.body;
    console.log(promptInfo);
    const openai = configuratonCreate();
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptInfo.prompt,
        max_tokens: promptInfo.max_tokens,
        temperature: 0,
      });
    res.send(response.data);
    console.log(response.data);
});

router.get('/', async (request, res) => {
    const openai = configuratonCreate();
    const response = await openai.createCompletion({
        model: "text-babbage-001",
        prompt: `How's it going doc?`,
        max_tokens: 7,
        temperature: 0,
      });
    res.send(response.data);

});

export default router;