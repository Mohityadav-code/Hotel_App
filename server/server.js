console.log("Hello World!");
const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const verifyJWT = require('./utilits/validtors');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(() => { 
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
});



// !!! This is the important part !!!
// * IF we want to import all routes at once from Route folder
// * and use middlware on all of the then we can do this by
// * first importing fs module so it can read all directories
// * and files in the routes folder and store them in an array
// * and then we can use map function or foreach to apply middleware
// * on all routes
// !!! above is the important part !!!
const fs = require('fs');
const files = fs.readdirSync("./routes");
console.log('files: ', files);

files.map((file) => {
   const temp = require('./routes/' + file)
  app.use("/check" , temp);
});

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});

app.get('/api/protected', verifyJWT, (req, res) => {
  res.json({ message: 'This is a protected route' });
});