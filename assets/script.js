
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var shapes = ["triangle", "square", "circle", "pentagon"];

function helloWorld() {
    console.log("Here are the topics that we learned through prework!");
}

function listTopics() {
    for(var x = 0; x < topics.length; x ++) {
        console.log(topics[x]);
    }
}

function listShapes() {
    for(var x = 0; x < shapes.length; x ++){
        console.log(shapes[x]);
    }
}


function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Lets study HTML!");
    } else if (randomTopic === 'Git') {
        console.log("Lets study Git!");
    } else if (randomTopic === 'CSS') {
        console.log("Lets study CSS!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Lets study JavaScript!");
    } else {
        console.log("Please try again.");
    }
}

helloWorld();
listTopics();
console.log("Which topic should we study first?")
selectTopic();
