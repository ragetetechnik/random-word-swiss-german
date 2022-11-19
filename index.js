const data = require('./list.json');

function getWord(){
    let words;
    words = data.words;
    return words[getRandomInt(words.length-1)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = getWord;