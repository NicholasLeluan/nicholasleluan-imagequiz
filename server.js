const express = require('express');
var cors =  require('cors');
var data = require('./data');

const app = express();

//MIDDLEWEAR
app.use(cors());

//.env is a file that will will added when the project is deplpyed
const port = process.env.PORT || 3069;
//WE USE RESPONSE TO SEND THE REQUEST BACK TO THE CLIENT --> LIKE A RETURN 
app.get('/', (request, response) => {
    response.send('WELCOME TO THE IMAGE QUIZ API!');
});
//META DATA: this will be a mapping of all the info we want for the quizzes as an object
//this can be used in the home page to access the name of the quiz, id , and image to use
//on the homepage
app.get('/quizzes', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return {name: x.name, id: x.id, image: x.image};
    });
    response.json(metadata); 
});


app.listen(port, () => {
    console.log("Listening on port "+port);
});