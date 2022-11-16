function getWord(){
    let words;
    words = ['Souerei','Schoppe','Pöstler','Cheib','Beiz']
    return words[getRandomInt(word.length)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
