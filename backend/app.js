const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// const { errorMiddleware } = require('expressive-error-handler');

const { Data, Count } = require('./modal')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// API to add or update data
app.post('/api/data', async (req, res) => {
    const { id, textData } = req.body;
    try {
        let data;
        if (id) {
            // If ID is provided, update existing data
            data = await Data.findByIdAndUpdate(id, { textData }, { new: true });
            // Increment update count
            await Count.findOneAndUpdate({}, { $inc: { updateCount: 1 } });
        } else {
            // If no ID, create new data entry
            data = new Data({ textData });
            await data.save();
            // Increment add count
            await Count.findOneAndUpdate({}, { $inc: { addCount: 1 } });
        }
        res.status(200).json({ success: true, message: 'successfully', data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// API to get all data list
app.get('/api/all-data', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json({ success: true,  data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error'  });
    }
});

// API to get count of add and update calls
app.get('/api/count', async (req, res) => {
    try {
        const counts = await Count.find();
        res.status(200).json({ success: true, Counts });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error'  });
    }
});



//  connect the frontend and return statics build frontend file
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
})

// for 404 routes  Errors 
app.use(function (req, res) {
    res.status(404).json({ error: "Route not found" });
});

// Middleware for Errors
// app.use(errorMiddleware);

module.exports = app

