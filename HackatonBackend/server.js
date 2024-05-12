const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('./init'); // Importer l'instance de la base de données depuis init.js
const axios = require('axios'); // Assurez-vous que vous avez cette ligne
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

/* Requete test: Minimal fonctionel */

app.get('/welcome', (req, res) => {
  res.send('Welcome to the API');
});



/* Les opérations CRUD avec la base de donnée*/

// Créer un urilisateur sur la plateforme

app.post('/users/new', async (req, res) => {
  try {
    const avatarId = req.body.avatarId; // Récupérer l'ID de l'avatar envoyé depuis le frontend
    const userPseudo = req.body.userPseudo; // Récupérer le pseudo envoyé depuis le frontend
    const userPassword = req.body.userPassword; //  Récupérer le pswd envoyé depuis le frontend

    // Vérifier si le pseudo existe déjà
    const if_pseudo = await client.db('epiquizdb').collection('users').findOne({pseudo: userPseudo});
    // Vérifier si le mot de passe existe déjà
    const if_password = await client.db('epiquizdb').collection('users').findOne({password: userPassword});

    
    if (if_pseudo && if_password) {
      return res.status(400).json({ success: false, message: 'Pseudo and password already exist' });
    } else if (if_pseudo) {
      return res.status(400).json({ success: false, message: 'Pseudo already exists' });
    } else if (if_password) {
      return res.status(400).json({ success: false, message: 'Password already exists' });
    }

    // Mettre à jour le document "avatar" pour l'utilisateur avec l'ID correspondant
    const result = await client.db('epiquizdb').collection('users').insertOne({
      avatar: avatarId,
      pseudo: userPseudo,
      password: userPassword
    });

    res.json({ success: true, message: 'Avatar ID and user credentials stored successfully' });
  } catch (error) {
    console.error('Error storing avatar ID and user credentials:', error);
    res.status(500).json({ success: false, message: 'Failed to store avatar ID and user credentials' });
  }
});


// Créer une liste de questions par rapport à un domaine
// https://quizapi.io/api/v1/questions -G -d apiKey=1yVHCdD11KqygLD8045MSHB9Naj6y9kM1XYhNUrl -d limit=10 -d category=Linux -d difficulty=easy


// Route pour récupérer les options de questions au format JSON
// app.get('/questions', async (req, res) => {
//     try {
//         // Faites une requête à l'API pour récupérer les questions
//         const response = await axios.get('URL_DE_L_API');

//         // Traitez les données et renvoyez-les comme réponse JSON
//         const questions = response.data;
//         res.json(questions);
//     } catch (error) {
//         // Gérez les erreurs en cas de problème avec la requête
//         console.error('Error fetching questions:', error);
//         res.status(500).json({ error: 'Failed to fetch questions' });
//     }
// });

app.get('/getQuestions', async (req, res) => {
  const url = 'https://quizapi.io/api/v1/questions';
  try {
      const { limit, category, difficulty } = req.query;
      const params = {
        apiKey: "1yVHCdD11KqygLD8045MSHB9Naj6y9kM1XYhNUrl",
        limit: limit,
        category: category,
        difficulty: difficulty
      };
      //const url = `https://quizapi.io/api/v1/questions'; //?apiKey=yVHCdD11KqygLD8045MSHB9Naj6y9kM1XYhNUrl&limit=${limit}&category=${category}&difficulty=${difficulty}`;
      const response = await axios.get(url, {params});
      res.json(response.data);
  } catch (error) {
      const category = req.query.category;
      // //const category = "Data";
      // const limit = 20;
      // const difficulty = 'any';
      const params = {
        apiKey: "1yVHCdD11KqygLD8045MSHB9Naj6y9kM1XYhNUrl",
        limit: 20,
        category: category,
        difficulty: ''
      };
      //const url = `https://quizapi.io/api/v1/questions?apiKey=yVHCdD11KqygLD8045MSHB9Naj6y9kM1XYhNUrl&limit=${limit}&category=${category}&difficulty=${difficulty}`;
      //const response = await axios.get(url);
      const response = await axios.get(url, {params});
      res.json(response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
