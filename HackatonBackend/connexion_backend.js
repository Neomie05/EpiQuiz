const client = require('./init'); // Importer l'instance de la base de données depuis init.js

app.get('/welcome', (req, res) => {
    res.send('Welcome to the API');
  });