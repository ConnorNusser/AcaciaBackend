"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openai_1 = __importDefault(require("openai"));
const promptInfo_1 = require("../constants/promptInfo");
const router = express_1.default.Router();
const openai = new openai_1.default({
    apiKey: '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'
});
router.post('/', async (req, res) => {
    var _a;
    const promptInfo = req.body;
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: promptInfo_1.systemContent,
                },
                { role: "user", content: promptInfo.prompt },
            ],
            model: "gpt-3.5-turbo",
        });
        res.send((_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.message.content);
    }
    catch (e) {
        console.error(e);
    }
});
router.post('/image', async (req, res) => {
    const promptInfo = req.body;
    try {
        const response = await openai.images.generate({
            prompt: promptInfo.prompt,
            n: 1,
            size: "512x512",
        });
        res.send(response.data[0]);
    }
    catch (e) {
        console.error(e);
    }
});
exports.default = router;
//# sourceMappingURL=openai.js.map