//import library
const express = require("express");

const PORT = process.env.PORT || 80;
//Create application
const app = express();
//Some basic route
app.get('/', (req, res) => {
    //send response
    res.json({ message: 'coucou' });
});
//Start server
app.listen(80, (err) => {
    if (err) {
        console.error(err);
        process.exit(0);
    }
    console.info('Server started')
});

