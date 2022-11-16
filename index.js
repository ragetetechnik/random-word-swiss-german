function getWord(){
    let words;
    words = ['Souerei','Schoppe','Pöstler','Cheib','Beiz']
    return words[getRandomInt(words.length-1)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports.getWord = getWord();