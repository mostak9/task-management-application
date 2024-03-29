require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6nmlwzx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const tasksCollections = client.db('taskDB').collection('taskCollections');

    // api to add tasks
    app.post('/allTasks', async(req, res) => {
      const data = req.body;
      const result = await tasksCollections.insertOne(data);
      res.send(result);
    })

    // api to get tasks
    app.get('/getTasks', async(req, res) => {
      const email = req.query.email;
      const status = req.query.status;
      const filter = {email: email, status: status};
      const result = await tasksCollections.find(filter).toArray();
      res.send(result);
    })

    // api to update status
    app.patch('/updateList/:id', async(req, res) => {
      const id = req.params.id;
      const status = req.body.status;
      const filter = {_id: new ObjectId(id)};
      const updateDoc = {
        $set: {
          status: status,
        }
      }
      const result = await tasksCollections.updateOne(filter, updateDoc);
      res.send(result);
    })
    

    // api to delete task
    app.delete('/deleteTask/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await tasksCollections.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Task management server is running..");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
