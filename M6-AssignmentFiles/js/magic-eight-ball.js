let answers = ["Yes, definitely!", "Most likely.", "It's possible...", "I wouldn't count on it!", "Probably not.", "No way!"];

function displayAnswer() {
    let n = floor(Math.random() * answers.length);
    console.log(answers[n])
}
