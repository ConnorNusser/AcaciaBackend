const {IgApiClient} = require('instagram-private-api');
const {get} = require('request-promise');
const sharp = require('sharp');
import express from 'express';
const router = express.Router();
const postToInsta = async (imageUrl: string, caption: string, igUserName: string, igPassword: string) => {
    const ig = new IgApiClient();
    ig.state.generateDevice(igUserName);
    await ig.account.login(igUserName, igPassword);
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
    return true
}
router.post('/', async(req, res) => {
    const promptInfo = req.body;
    try{
        const response = await postToInsta(promptInfo.imageUrl, promptInfo.caption, promptInfo.igUserName, promptInfo.igPassword)
        if (response){
            res.status(200).send("Sucessfully Submitted the post");
        }
    }catch(e){
        console.log(e);
        res.status(400).send("Something went wrong");
    }

});

export default router;