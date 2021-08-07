// let funWords = require('funny-words');

// const funnyW = t =>  funWords();

// const funny = funnyW('Nesto se sprema');
// console.log(funny);
console.log("1");
let funnyWords = require("funny-words");

console.log(funnyWords("Programiranje je zabavno"));

/* ---------------------------------------------*/
console.log("2");
let oneLinerJoke = require("one-liner-joke");

let getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

/* ---------------------------------------------*/
console.log("3");
let figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
/* ----------------------------------*/
console.log("4");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
/* -------------------- */
console.log("5");
function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);
/*------------------------ */
console.log("6");
let dateFormat = require("dateformat");
let now = new Date();

// Basic usage
console.log(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"));
// Saturday, June 9th, 2007, 5:46:21 PM

// You can use one of several named masks
console.log(dateFormat(now, "isoDateTime"));
// 2007-06-09T17:46:21

// ...Or add your own
console.log(dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"');
console.log(dateFormat(now, "hammerTime"));
// 17:46! Can't touch this!

/*  --------------------------*/
console.log("7");
const Joke = require("awesome-dev-jokes");

console.log(Joke.getRandomJoke());

/*--------------------------*/
console.log("8");
var chinese = require("isthischinese");
var string = "你好，世界";
console.log(chinese.isChinese("is it Chinese??"));
//console prints "nah"
console.log(chinese.isChinese(string));
//console prints "yes it is chinese.これは中国語です。"

/*-------------------*/
console.log("9")
 const snakeNames = require('snake-names');

console.log('Snake name: '+snakeNames.random());
//=> 'Albert

/*------------------------*/
console.log("10")
var porreta = require('porreta');
 
console.log("Random word Brazilian-Portugeuse: "+porreta()); // pamonha
console.log("Random word Brazilian-Portugeuse: " + porreta()); // cangote
 
porreta.words; // ['alpendre', 'arapuca', 'araraquara', ...]