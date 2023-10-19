import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => { res.send("hello") });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});