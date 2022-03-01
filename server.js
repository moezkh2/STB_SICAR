const path = require('path')
const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000;

//  API endPoints
/* app.get('/', (req, res) => {

}) */


//production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static('./client/build'))
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    })
}



app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
});