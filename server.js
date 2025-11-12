const express = require('express');
const app = express();
const port = 8080;

// Example route
app.get('/', (req, res) => {
  res.send('Bulletin Board App Utilities Running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
