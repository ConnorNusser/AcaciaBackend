import express from 'express';
import OpenAI from 'openai';
import { systemContent } from '../constants/promptInfo';
const router = express.Router();


const openai = new OpenAI({
    apiKey: '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'
});



router.post('/', async (req, res) => {
    const promptInfo = req.body;
    try{
        const completion = await openai.chat.completions.create({
            messages: [
                {
                  role: "system",
                  content: systemContent,
                },
                { role: "user", content: promptInfo.prompt },
              ],
              model: "gpt-3.5-turbo",
          });
    res.send(completion.choices[0]?.message.content);
    }catch(e){
        console.error(e);
    }
});


router.post('/image', async (req, res) => {
    const promptInfo = req.body;
    try{
    const response = await openai.images.generate({
        prompt: promptInfo.prompt,
        n: 1,
        size: "512x512",
      });
    res.send(response.data[0]);
    }catch (e){
        console.error(e);
    }
});

export default router;