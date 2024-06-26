const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin123@cluster0.k1js9uk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('epiquizdb');
    const users = database.collection('users');
    const quizmodele = database.collection('quizmodele');
    const rooms = database.collection('rooms');
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = client;

// // Send a ping to confirm a successful connection
// await client.db("admin").command({ ping: 1 });