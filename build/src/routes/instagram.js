"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');
const sharp = require('sharp');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const postToInsta = async (imageUrl, caption) => {
    console.log(imageUrl);
    console.log(caption);
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    const imageBuffer = await get({
        url: imageUrl,
        encoding: null,
    });
    // Convert PNG image buffer to JPEG image buffer
    const jpegBuffer = await sharp(imageBuffer)
        .jpeg()
        .toBuffer();
    console.log(jpegBuffer);
    await ig.publish.photo({
        file: jpegBuffer,
        caption: caption, // nice caption (optional)
    });
    return true;
};
router.post('/', async (req, res) => {
    const promptInfo = req.body;
    console.log(promptInfo.imageUrl);
    try {
        const response = await postToInsta(promptInfo.imageUrl, promptInfo.caption);
        if (response) {
            res.status(200).send("Sucessfully Submitted the post");
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).send("Something went wrong");
    }
});
exports.default = router;
//# sourceMappingURL=instagram.js.map