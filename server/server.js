const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port | 3000;


app.use(express.static(path.join(__dirname, '../dist/test-full-stack-app/browser')));

app.get('*', (req, tes) => {
    res.sendFile(path.join(__dirname, '../dist/test-full-stack-app/browser/index.html'));
})

app.get('/', (req, res) => {
    res.send('Hello World from Node.js server!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});