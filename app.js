const express = require('express');
const app = express();
const port = 8080;

// set content type for all responses to application/json
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// get / should return a JSON response with a message "API is running"
app.get('/', (req, res) => {
    res.status(200).json({ 
        "message": "API is running"
    });
});

// get /api/health should return a JSON response with a message "healthy"
app.get('/health', (req, res) => {
    res.status(200).json({ 
        "message": "healthy"
    });
});

// get /api/me should return a JSON response with your name, email, and GitHub profile URL
app.get('/me', (req, res) => {
    res.status(200).json({ 
        "name": "David Okunade",
        "email": "okunadedavid4@gmail.com",
        "github": "https://github.com/okunadedavid"
    });
});

// START SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

