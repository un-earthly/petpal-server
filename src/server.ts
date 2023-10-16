import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from"fs"
const app = express();
app.use(express.json());
app.use(cors());

const uploadDirectory = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}
let fileCounter = 1;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        // Get the file extension from the original filename
        const fileExtension = path.extname(file.originalname);

        // Generate a unique filename as "file-{counter}.{originalExtension}"
        const uniqueFilename = `file-${fileCounter++}${fileExtension}`;
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage });

app.use('/uploads', express.static(uploadDirectory));

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
