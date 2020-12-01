const q1 = {
    //simpsons
    title: 'Who is this?',
    picture: 'bart.png',
    choices: ['Bart', 'Homer', 'Lisa', 'Marge'],
    correct: 'Bart'
}
const q2 = {
    //simpsons
    title: 'Who is this?',
    picture: 'homer.png',
    choices: ['Bart', 'Louis', 'Homer', 'Krusty'],
    correct: 'Homer'
}
const q3 = {
    //simpsons
    title: 'Who is this?',
    picture: 'marge.png',
    choices: ['Bart', 'Lisa', 'Marge', 'Maggie'],
    correct: 'Marge'
}
const q4 = {
    //simpsons
    title: 'Who is this?',
    picture: 'krusty.png',
    choices: ['Krusty the Clown', 'Bart', 'Simposons', 'No One'],
    correct: 'Krusty the Clown'
}
const q5 = {
    //family guy
    title: 'Who is this?',
    picture: 'stewie.png',
    choices: ['Peter', 'Brian', 'Louis', 'Stewie'],
    correct: 'Stewie'
}
const q6 = {
    //family guy
    title: 'Who is this?',
    picture: 'brian.png',
    choices: ['Cat', 'Brian', 'Joe', 'Candle'],
    correct: 'Brian'
}
const q7 = {
    //family guy
    title: 'Who is this?',
    picture: 'megg.png',
    choices: ['Stewie', 'A Car', 'Meg', 'Brian'],
    correct: 'Meg'
}
const q8 = {
    //family guy
    title: 'Who is this?',
    picture: 'Peter.png',
    choices: ['Peter', 'Meg', 'Stewie', 'Brian'],
    correct: 'Peter'
}
const q9 = {
    //pokemon
    title: 'What is this?',
    picture: 'pikachu.png',
    choices: ['Pikachu', 'Charizard', 'Magikarp', 'Blastoise'],
    correct: 'Pikachu'
}
const q10 = {
    //pokemon
    title: 'What is this?',
    picture: 'charizard.png',
    choices: ['Charizard', 'Pikachu', 'Blastoise', 'Magikarp'],
    correct: 'Charizard'
}
const q11 = {
    //pokemon
    title: 'What is this?',
    picture: 'magikarp.png',
    choices: ['Charizard', 'Blastoise', 'Magikarp', 'Pikachu'],
    correct: 'Magikarp'
}
const q12 = {
    //pokemon
    title: 'What is this?',
    picture: 'blastoise.png',
    choices: ['Pikachu', 'Magikarp', 'Charizard', 'Blastoise'],
    correct: 'Blastoise'
}

const quiz1 = {
    title: 'Simpsons Quiz',
    id: 1,
    image: 'bart.png',
    questions: [q1, q2, q3, q4],
}
const quiz2 = {
    title: 'Family Guy Quiz',
    id:2,
    image: 'stewie.png',
    questions: [q5, q6, q7,q8],
}
const quiz3 = {
    title: 'Pokemon Quiz',
    id: 3,
    image: 'pikachu.png',
    questions: [q9,q10,q11,q12],
}
let quizzes = [quiz1, quiz2, quiz3];

let scores = [];


module.exports.scores = scores;
module.exports.quizzes = quizzes;