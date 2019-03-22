const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '/../build')));

app.get('*', (req, res) => {
    console.log(`sendFile: ${path.join(__dirname, '/../build', 'index.html')}`);
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
