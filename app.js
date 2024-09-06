const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());

app.post('/getResponse' , (req , resp )=>{
  console.log(req.body.question);



      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // const prompt = "Write a story about a magic backpack.";

      model.generateContent(req.body.question)
      .then(result =>{
        console.log(result.response.text());
        const response = result.response.text();
        resp.status(200).json({
          response : response
        })
       // console.log(response);
        
      })
      .catch(err =>{
        console.log(err);
        resp.status(500).json({
          error : err
        })
      });
})


module.exports = app;