const prompt = require("prompt-sync")();

console.log("Welcome to the General Knowledge quiz!!");

let correctAnswers=0;
const totalQuestions=5;

const answer1 = prompt("A numeric value used to identify a memory cell ? ");
const correctAnswer1 = "address";

if(answer1 === correctAnswer1){
    console.log("Correct Answer");
    correctAnswers++;
} else {
    console.log("Wrong Answer");
}


const answer2 = prompt("When a password is limited strictly to numeric characters, the secret is often referred to as a PIN. What does that acronym stand for ? ");
const correctAnswer2 = "personal identification number";

if(answer2.toLowerCase() === correctAnswer2){
    console.log("Correct Answer");
    correctAnswers++;
} else {
    console.log("Wrong Answer");
}

const answer3 = prompt("THINK was the company motto for more than 40 years, for the company often referred to as Big Blue.What is this frequently-acronymed company ? ");
const correctAnswer3 = "IBM";

if(answer3.toUpperCase() === correctAnswer3){
    console.log("Correct Answer");
    correctAnswers++;
} else {
    console.log("Wrong Answer");
}

const answer4 = prompt("Andy Rubin is known as one of the three founders of what massively popular cell phone operating system ? ");
const correctAnswer4 = "android";

if(answer4.toLowerCase() === correctAnswer4){
    console.log("Correct Answer");
    correctAnswers++;
} else {
    console.log("Wrong Answer");
}

const answer5 = prompt("Which software with a circus-act-inspired name that starts with A can you download to view PDFs with the greatest of ease ? ");
const correctAnswer5 = "acrobat reader";

if(answer5.toLowerCase() === correctAnswer5){
    console.log("Correct Answer");
    correctAnswers++;
} else {
    console.log("Wrong Answer");
}

console.log("You got", correctAnswers,"questions correct!");
console.log("You scored", Math.round((correctAnswers/totalQuestions)*100),"percent!");
