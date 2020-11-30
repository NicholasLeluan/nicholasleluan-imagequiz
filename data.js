
//ANSWERS ARE ALL THE SAME
//NEED TO CHANGE THE PICTURE, THE CHOICES, AND THE ANSWERS IN PRODUCTION
let q1 = {picture: 'q1.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q2 = {picture: 'q2.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q3 = {picture: 'q3.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q4 = {picture: 'q4.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q5 = {picture: 'q5.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q6 = {picture: 'q6.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q7 = {picture: 'q7.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q8 = {picture: 'q8.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q9 = {picture: 'q9.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};
let q10 = {picture: 'q10.png', choices: ['choice1','choice2','choice3'],answer: 'choice2'};


let quiz1 = {name: 'quiz1', id: 1, image: 'quiz1.png', questions: [q1,q2,q3]};
let quiz2 = {name: 'quiz2', id: 2, image: 'quiz2.png', questions: [q4,q5,q6]};
let quiz3 = {name: 'quiz3', id: 3, image: 'quiz3.png', questions: [q7,q8,q9,q10]};



const quizzes = [quiz1,quiz2,quiz3]



module.exports.quizzes = quizzes;