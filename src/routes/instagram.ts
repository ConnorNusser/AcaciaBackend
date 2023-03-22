const {IgApiClient} = require('instagram-private-api');
const {get} = require('request-promise');
import express from 'express';
const router = express.Router();
const postToInsta = async (imageUrl: string, caption: string) => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    const imageBuffer = await get({
        url: imageUrl,
        encoding: null, 
    });
    await ig.publish.photo({
        file: imageBuffer,
        caption: caption, // nice caption (optional)
    });
    return true
}
router.post('/', async(req, res) => {
    const promptInfo = req.body;
    try{
        const response = await postToInsta(promptInfo.imageUrl, promptInfo.caption)
        if (response){
            res.status(200).send("Sucessfully Submitted the post");
        }
    }catch(e){
        res.status(400).send("Something went wrong");
    }

});

export default router;