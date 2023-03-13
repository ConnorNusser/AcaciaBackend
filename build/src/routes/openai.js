"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuratonCreate = () => {
    const configuration = new Configuration({
        apiKey: process.env.OpenAPIKEY,
    });
    const openai = new OpenAIApi(configuration);
    return openai;
};
router.post('/', async (req, res) => {
    const promptInfo = req.body;
    const openai = configuratonCreate();
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptInfo.prompt,
            max_tokens: promptInfo.max_tokens,
            temperature: 0,
        });
        res.send(response.data);
    }
    catch (e) {
        console.error(e);
    }
});
router.post('/image', async (req, res) => {
    const promptInfo = req.body;
    const openai = configuratonCreate();
    try {
        const response = await openai.createImage({
            prompt: promptInfo.prompt,
            n: 1,
            size: "512x512",
        });
        res.send(response.data.data[0].url);
    }
    catch (e) {
        console.error(e);
    }
});
exports.default = router;
//# sourceMappingURL=openai.js.map