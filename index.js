require('dotenv').config();

const express = require('express');

const app = express();

app.get( '/' , (req, res ) => {

res.send(" Hello COFFEE");

})

app.get( '/login' , (req, res ) => {

    res.send("Hello COFFEE LOGIN ");
    
})

port = process.env.PORT;

app.listen(port , () =>{


    console.log(`Server running at port ${port}`);
})