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
    const promptInfo = req.body;
    const openai = configuratonCreate();
    try{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptInfo.prompt,
        max_tokens: promptInfo.max_tokens,
        temperature: 0,
      });
    res.send(response.data);
    }catch(e){
        console.error(e);
    }
});


router.post('/image', async (req, res) => {
    const promptInfo = req.body;
    const openai = configuratonCreate();
    try{
    const response = await openai.createImage({
        prompt: promptInfo.prompt,
        n: 1,
        size: "512x512",
      });
    res.send(response.data.data[0].url);
    }catch (e){
        console.error(e);
    }
});

export default router;