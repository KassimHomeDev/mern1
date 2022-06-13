require('dotenv').config();
const express = require('express');
const authRoutes = require('./routers/authRoutes');
const errorHandler = require("./mildware/error")
const ErrorResponses = require("./utils/errorResponse")
const core = require('cors')


const app = express();
const port = process.env.PORT;

//middlewares
app.use(core());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use(authRoutes);
// routes is error
app.all("*", (req, res, next)=>{
    error = new ErrorResponses("404 page not found", 404);
    next(error)
})
app.use(errorHandler);

app.listen(port, ()=> console.log(`server running at http://localhost:${port}`));