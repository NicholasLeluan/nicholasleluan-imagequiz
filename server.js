const express = require('express');
var cors =  require('cors');
var bodyParser = require('body-parser');
var data = require('./data');

//creates the application
const app = express();

//MIDDLEWEAR
app.use(cors()); //allows requests from anywhere to be accepted; this could accept specific IP addresses
app.use(bodyParser.json()); //a request that comes in is converted from byte array to a JSON object
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//.env is a file that will will added when the project is deployed
//Heroku will use the process.env.PORT || Our machine uses port 3069 on localhost
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
        return {title: x.title, id: x.id, image: x.image};
    });
    response.json(metadata); 
});

 app.get('/highscores',(request,response) => {
    let metadata = data.scores.map(x => {
         return {username: x.username, quizid: x.quizid, score: x.score}
     });
     response.json(metadata);
 });


//THIS GET JUST THE QUESTIONS TO THE QUIZ
app.get('/questions/:quizid', (request,response) => {
    let quizID = request.params.quizid;
    let found = data.quizzes.find(x => x.id === Number(quizID));
    if (found){
        response.json(found.questions);
    }
    else{
        response.status(404).json({error: "this quiz id: "+ searchID +" does not match any quiz id on record."});
    }
});

//THIS GETS ALL THE DATA TO THE PASSED IN QUIZ ID
app.get('/quiz/:id', (request,response) => {
    let searchID = request.params.id;
    let found = data.quizzes.find(x => x.id == searchID);
    if (found){
        response.json(found);
    }
    else{
        response.status(404).json({error: "this quiz id: "+ searchID +" does not match any quiz id on record."});
    }
});


//Like in a form, make sure the name of any input matches this below
//for imagequiz: username is the corect input name for the login!
app.post('/score', (request,response) => {
    let username = request.body.username;
    let quizid = request.body.quizid;
    let score = request.body.score;
    data.scores.push({score: score, quizid: quizid, username: username})
    response.json({message:'The score was added succuesfully!'});
});

//continously listening for a request to the above defined port.
app.listen(port, () => {
    console.log("Listening on port "+port);
});