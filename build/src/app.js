"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openai_1 = __importDefault(require("./routes/openai"));
const app = (0, express_1.default)();
const port = 8000;
require('dotenv').config();
app.get('/', (req, res) => res.send("Hello from 2323homepage"));
app.use('/getfeedinfo', openai_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map