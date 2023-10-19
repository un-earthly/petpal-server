import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.route';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router)

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("hello")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});