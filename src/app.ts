import express from 'express';
import openAiRoutes from './routes/openai';
import instagramPostRoutes from './routes/instagram';


const app = express();
const port = 8000;
require('dotenv').config();
app.use(express.json());
app.use(               
  express.urlencoded({
    extended: true,
  })
);
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send("Hello from 2323homepage"));
app.use('/getfeedinfo', openAiRoutes);
app.use('/instagrampost', instagramPostRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

