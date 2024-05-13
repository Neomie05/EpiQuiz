const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('./init'); // Importer l'instance de la base de données depuis init.js
const axios = require('axios'); // Assurez-vous que vous avez cette ligne
const { v4: uuidv4 } = require('uuid'); // générer des identifiant unique
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

/* Requete test: Minimal fonctionel */

app.get('/welcome', (req, res) => {
  res.send('Welcome to the API');
});


// Créer un urilisateur sur la plateforme

app.post('/users/new', async (req, res) => {
//app.get('/users/new', async (req, res) => {
  try {
    await client.connect();
    const { avatarId, userPseudo, userPassword } = req.body;
    // const avatarId = 3; // Récupérer l'ID de l'avatar envoyé depuis le frontend
    // const userPseudo = 'max'; // Récupérer le pseudo envoyé depuis le frontend
    // const userPassword = 'max0'; //  Récupérer le pswd envoyé depuis le frontend
    
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
    //res.send("Veerification des fonctionnalités de base pour la création d'utilisateurs!")

    // Mettre à jour le document "avatar" pour l'utilisateur avec l'ID correspondant
    const result = await client.db('epiquizdb').collection('users').insertOne({
      avatar: avatarId,
      pseudo: userPseudo,
      password: userPassword
    });
    await client.close();
  //   res.json({ success: true, message: 'Avatar ID and user credentials stored successfully' });
  } catch (error) {
    console.error('Error storing avatar ID and user credentials:', error);
    res.status(500).json({ success: false, message: 'Failed to store avatar ID and user credentials' });
  }
});


// Route pour créer une salle de compétition

//app.post('/room/create', async(req, res) => {
app.get('/room/create', async (req, res) => {
  try {
    await client.connect();
    // Récupérer le pseudo du propriétaire de la requête
    //const ownerPseudo = req.body.ownerPseudo;
    const ownerPseudo = 'lili';

    // Authentification et vérification du propriétaire (à implémenter)
    const if_pseudo = await client.db('epiquizdb').collection('users').findOne({pseudo: ownerPseudo});
    if (!if_pseudo) {
      await client.close();
      return res.status(400).json({ success: false, message: 'Pseudo don\'t exist' });
    } else {
      const roomId = uuidv4().substring(0, 8);
      const result = await client.db('epiquizdb').collection('rooms').insertOne({
        roomId: roomId,
        owner: ownerPseudo,
        members: []
      });
      await client.close();
      res.status(201).json({ message: 'Salle créée avec succès', roomId: roomId });
    }
  } catch(error) {
    console.error('Error creating room:', error);
    res.status(500).json({ success: false, message: 'Failed to achieve room requeste' });
  }
});

// Ajout des membres dans le sallon

//app.post('/room/addmember', async(req, res) => {
app.get('/room/addmember', async (req, res) => {
    try {
      await client.connect();
      // Récupérer le pseudo du propriétaire de la requête
      //const {roomId, membersPseudo} = req.body;
      roomId = "51da21b9"
      membersPseudo = "maxi"

      // Vérifier si le pseudo existe déjà
      const if_pseudo = await client.db('epiquizdb').collection('users').findOne({pseudo: membersPseudo});
      // Vérifier si le salon existe déjà
      const if_room = await client.db('epiquizdb').collection('rooms').findOne({roomId: roomId});
      
      if (!if_pseudo) {
        return res.status(400).json({ success: false, message: 'Pseudo don\'t exists' });
      } else if (!if_room) {
        return res.status(400).json({ success: false, message: 'room don\'t exists' });
      } else {
        const result = await client.db('epiquizdb').collection('rooms').updateOne(
          { roomId: roomId }, // Filtre pour trouver le document
          { $push: { members: membersPseudo } } // Opérateur $push pour ajouter l'élément à la liste
        );
        await client.close();
        res.status(201).json({ message: 'membre ajouter avec succès' });
      }
    } catch(error) {
      console.error('Error adding member:', error);
      res.status(500).json({ success: false, message: 'Failed to add memeber in room' });
    }
});

// Créer une liste de questions par rapport à un domaine

app.get('/getQuestions', async (req, res) => {
  const url = 'https://quizapi.io/api/v1/questions';
  try {
      const { limit, category, difficulty } = req.query;
      const params = {
        apiKey: "faYwWR1J0LkrekSGq456PFh3fggst6y1tyckLBir",
        limit: limit,
        category: category,
        difficulty: difficulty
      };
      const response = await axios.get(url, {params});
      res.json(response.data);
  } catch (error) {
      const category = req.query.category;
      const params = {
        apiKey: "faYwWR1J0LkrekSGq456PFh3fggst6y1tyckLBir",
        limit: 20,
        category: category,
        difficulty: ''
      };
      const response = await axios.get(url, {params});
      res.json(response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
