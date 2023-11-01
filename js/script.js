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
    year: 1999,
    rating: "Rating: *****"
  },
  {
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", 
    source: "Brian W. Kernighan",
    rating: "Rating: **"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 
    source: "Martin Fowler",
    citation:"Article",
    rating: "Rating: ****"
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.", 
    source: "Chris Pine",
    citation: "Book / Learn to Program",
    year: 2005,
    rating: "Rating: ***"
  },
  {
    quote: "here are only two kinds of languages: the ones people complain about and the ones nobody uses.", 
    source: "Bjarne Stroustrup",
    year: 1980,
    rating: "Rating: *****"
  }
];

/***
 * `getRandomQuote` function
***/
//let numQuotes = quotes.length;

function getRandomQuote(){
  return Math.floor(Math.random() * quotes.length); //returns a random number between 0 and the maximum number of quotes
};

/***
 * `printQuote` function
***/
//calls getRandomQuote()
//use the returned quote object to build a string of HTML and quote props
//use the string to display a random quote in the browser*/

//create a variable to store random quote object returned from getRandomQuote()
let randomQuote = quotes[getRandomQuote()]; //randomQuote is assigned to a quote with an index of a random number from the getRandomQuote function

let html = `<p class="quote">${randomQuote.quote}</p>`+`<p class="source">${randomQuote.source}` + `<p>${randomQuote.rating}`; //template literal of two paragraph elements to be assigned to html

function printQuote(){
  
  if (randomQuote.citation !== undefined){ //if randomQuote's citation is not undefined, print string
    html += `<span class="citation">${randomQuote.citation}</span>`; 
  } if (randomQuote.year !== undefined){ //if randomQuote's year is not undefined, print string
    html += `<span class="year">${randomQuote.year}</span>`;
  } else {
    html+= `</p>` //adss closing p element
  }
  return html; //returns html when caliing the printQuote() function
}

printQuote(); //calls printquote function

document.getElementById('quote-box').innerHTML= html; //sets printQuote function to change the HTML string by using innerHTML property


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);