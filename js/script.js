/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.", 
    source: "Andrew Hunt & David Thomas", 
    citation:"Book / The Pragmatic Programmer",
    year: 1999
  },
  {
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", 
    source: "Brian W. Kernighan"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 
    source: "Martin Fowler"
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.", 
    source: "Chris Pine",
    citation: "Book / Learn to Program",
    year: 2005
  },
  {
    quote: "here are only two kinds of languages: the ones people complain about and the ones nobody uses.", 
    source: "Bjarne Stroustrup"
  }
];

/***
 * `getRandomQuote` function
***/
let numQuotes = quotes.length;

function getRandomQuote(numQuotes){
  return Math.floor(Math.random() * numQuotes);
};

/***
 * `printQuote` function
***/
//calls getRandomQuote()
//use the returned quote object to build a string of HTML and quote props
//use the string to display a random quote in the browser
function printQuote(){
//create a variable to store random quote object returned from getRandomQuote()
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);