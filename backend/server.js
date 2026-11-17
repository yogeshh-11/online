const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/questions', (req, res) => {
    res.json({ message: "Online Exam Backend Running!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});