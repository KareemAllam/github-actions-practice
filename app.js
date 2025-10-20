import path from 'path';
import express from 'express';
import OS from 'os';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));
app.use(cors());

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch((err) => {
        console.log("error!! " + err);
    });

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    name: String,
    id: Number,
    description: String,
    image: String,
    velocity: String,
    distance: String
});
var planetModel = mongoose.model('planets', dataSchema);


app.post('/planet', async function (req, res) {
    // console.log("Received Planet ID " + req.body.id)
    const planetData = await planetModel.findOne({
        id: req.body.id
    })
    if (planetData) {
        res.send(planetData);
    } else {
        res.status(404).send("Planet not found");
    }
})

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


app.get('/os', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        "os": OS.hostname(),
        "env": process.env.NODE_ENV
    });
})

app.get('/live', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        "status": "live"
    });
})

app.get('/ready', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        "status": "ready"
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port - ${PORT}`);
})

export default app;