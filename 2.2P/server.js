const express = require('express');
const app = express();
const port = 3000;

//static files from the public folder
app.use(express.static('public'));

// GET endpoint


// The url will be  http://localhost:3000/hello
app.get('/hello', (req, res) => {
  res.send('Hello from the server! I am Ahnaf...');
});

// For adding 2 numbers


// The url will be for example http://localhost:3000/add?number_1=14&number_2=8
app.get('/add', (req, res) => {
  const number_1 = parseFloat(req.query.number_1);
  const number_2 = parseFloat(req.query.number_2);

  if (isNaN(number_1) || isNaN(number_2)) {
    return res.status(400).send('Invalid input');
  }

  const result = number_1 + number_2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
