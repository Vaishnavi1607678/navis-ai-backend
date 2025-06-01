// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: "OK" }));
app.get('/ai', (req, res) => res.json({ message: "AI Ready" }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

