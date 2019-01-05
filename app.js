const express = require('express');
const app = express();
const path = require('path');

const port = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/signup.html'));
});

app.get('/solutions', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/solutions.html'));
});

app.listen(port, () => console.log(`The application is running on ${port}`));
