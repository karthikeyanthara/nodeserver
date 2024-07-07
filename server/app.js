const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'dist/test-full-stack-app/browser')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/test-full-stack-app/browser/index.html'));
})

app.get('/', (req, res) => {
    //res.send('Hello World');
    res.sendFile(path.join(__dirname, 'dist/test-full-stack-app/browser'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});