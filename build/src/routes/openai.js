"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const feedObj = [
    {
        "prompt": "content"
    }
];
router.get('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-babbage-001",
        prompt: `Hi how's it going?`,
        max_tokens: 7,
        temperature: 0,
    });
    res.send(response.data);
});
exports.default = router;
//# sourceMappingURL=openai.js.map