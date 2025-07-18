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

app.post("/events", async (req, res) => {
    const { event, location, image, day, month, year, weekDay } = req.body;
    try {
        const payload = {
        event,
        location,
        image,
        day,
        month,
        year,
        weekDay,
        };
        // Check if the event already exists
        const checkexisting = await db.collection('/featuredEvents').where('event', '==', event).get();
        if (!checkexisting.empty) {
            return res.status(202).json({ message: 'Item existing' });
        }
        const docRef = await db.collection('featuredEvents').add(payload);
        res.status(201).json({ id: docRef.id, message: 'Event saved successfully' });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Error retrieving data');
    }
});

app.delete("/events/:eventName", async (req, res) => {
    const { eventName } = req.params;
    try {
        const snapshot = await db.collection('/featuredEvents').where('event', '==', eventName).get();
        if (snapshot.empty) {
            return res.status(404).json({ message: 'Event not found' });
        }
        const batch = db.batch(); 

        snapshot.forEach((doc) => {
        batch.delete(doc.ref);
        });

        await batch.commit();

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).send('Error deleting event');
        console.error('Error deleting event:', error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
