"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("../app");
const openai_1 = require("openai");
const router = express_1.default.Router();
const configuration = new openai_1.Configuration({
    organization: "org-qRPRbD0Nm3qbT9gVq9ccynM1",
    apiKey: app_1.OpenApiKey,
});
const openai = new openai_1.OpenAIApi(configuration);
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