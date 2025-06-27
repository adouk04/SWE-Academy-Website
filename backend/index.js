const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(express.json())
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.databaseURL
  });

const db = getFirestore();

app.get("/events", async (req, res) => {
    try {
        const snapshot = await db.collection('/featuredEvents').get()
        const events = []
        
        snapshot.forEach(doc => {
            events.push({ id: doc.id, ...doc.data() })
        })

        res.status(200).json(events)

    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Error retrieving data');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
