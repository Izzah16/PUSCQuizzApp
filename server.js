const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define schema for storing team scores
const TeamSchema = new mongoose.Schema({
    teamName: String,
    score: { type: Number, default: 0 }
});

const Team = mongoose.model('Team', TeamSchema);

// Initialize scores for 10 teams if not present
app.get('/init', async (req, res) => {
    const teams = await Team.find();
    if (teams.length === 0) {
        for (let i = 1; i <= 10; i++) {
            const newTeam = new Team({ teamName: `Team ${i}`, score: 0 });
            await newTeam.save();
        }
        res.send('Teams initialized');
    } else {
        res.send('Teams already initialized');
    }
});

// Get scores from the database
app.get('/teams', async (req, res) => {
    const teams = await Team.find();
    res.json(teams);
});

// Update score of a specific team
app.post('/updateScore', async (req, res) => {
    const { teamName, score } = req.body;
    const result = await Team.findOneAndUpdate({ teamName }, { score }, { new: true });
    if (result) {
        res.send('Score updated');
    } else {
        res.status(404).send('Team not found');
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
