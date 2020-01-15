//UTILITY FUNCTIONS

function randomChoice() {
    let rando = Math.floor(Math.random()*arguments.length);
    return arguments[rando];
}

function randomChoiceInArray(array) {
    let rando = Math.floor(Math.random()*array.length);
    return array[rando];
}

const getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

const capitalize = str => str[0].toUpperCase()+str.slice(1);