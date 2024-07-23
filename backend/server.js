const express = require('express');
const db = require('./db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
  });

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append the date to make the filename unique
    }
});

const upload = multer({ 
    storage: storage
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle post creation with image
app.post('/posts', upload.single('image'), (req, res) => {
    console.log(req);
    const { title, content } = req.body;
    const image = req.file ? req.file.path : null; // Get the path of the uploaded file
    console.log(req.file);
    db.query(
        'INSERT INTO posts (title, content, image_data) VALUES (?, ?, ?)',
        [title, content, image],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Failed to save the post');
            } else {
                res.status(201).send('Post saved successfully');
            }
        }
    );
});