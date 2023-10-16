"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const uploadDirectory = path_1.default.join(__dirname, '../uploads');
// if (!fs.existsSync(uploadDirectory)) {
//     fs.mkdirSync(uploadDirectory);
// }
// let fileCounter = 1;
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDirectory);
//     },
//     filename: (req, file, cb) => {
//         // Get the file extension from the original filename
//         const fileExtension = path.extname(file.originalname);
//         // Generate a unique filename as "file-{counter}.{originalExtension}"
//         const uniqueFilename = `file-${fileCounter++}${fileExtension}`;
//         cb(null, uniqueFilename);
//     },
// });
// const upload = multer({ storage });
// app.use('/uploads', express.static(uploadDirectory));
// app.post('/api/upload', upload.single('file'), (req, res) => {
//     res.json({ message: 'File uploaded successfully' });
// });
app.get("/", (req, res) => { res.send("hello"); });
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
