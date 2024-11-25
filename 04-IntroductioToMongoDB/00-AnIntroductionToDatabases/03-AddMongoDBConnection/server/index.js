const express = require('express');
const mongoose = require('mongoose');
const initialDBSetup = require('./initialDBSetup');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(express.json());
app.use(cors({origin: 'http://127.0.0.1:3000'}));

/* TODO: Add the code to connect to the MongoDB database with URI: mongodb://127.0.0.1/myDB */
// Solution:
// mongoose
//   .connect('mongodb://127.0.0.1/myDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
  .then(async () => {
    console.log('connected');
    // initialize DB, we will discuss this in further lessons
    await initialDBSetup();
  });

const db = mongoose.connection;

db.once("open", function () {
  console.log("Connected to the cosmic library of myDB!");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

app.get("/api/some-endpoint", async (req, res) => {
  try {
    // TODO: Retrieve the planet data from the "planets" collection in the database.
    // Solution:
    // const planets = await db.collection('planets').find().toArray();
    res.json({message: JSON.stringify(planets)});
  } catch (err) {
    console.error("Error while fetching cosmic bodies: ", err);
    res.status(500).json({ error: "Failed to fetch planets" });
  }
});