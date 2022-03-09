import express, {Request, Response} from 'express';
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.send("hello world");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at the port http://localhost:${port}`)
})