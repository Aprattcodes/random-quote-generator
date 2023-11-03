/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Grade anticipated : exceeds

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
function printQuote(){
  // Get a random quote
  let randomIndex = getRandomQuote();
  let randomQuote = quotes[randomIndex];

  let html = `<p class="quote">${randomQuote.quote}</p>`+`<p class="source">${randomQuote.source}` + `<p>${randomQuote.rating}`; //template literal of two paragraph elements to be assigned to html

  if (randomQuote.citation !== undefined){ //if randomQuote's citation is not undefined, print string
    html += `<span class="citation">${randomQuote.citation}</span>`; 
  } if (randomQuote.year !== undefined){ //if randomQuote's year is not undefined, print string
    html += `<span class="year">${randomQuote.year}</span>`;
  } else {
    html+= `</p>` //adss closing p element
   }

  // Update the quote-box with the new quote
  document.getElementById('quote-box').innerHTML = html;
  //extra credit : updates background color with random color
  let randomHex = Math.floor(Math.random()*16777215).toString(16); //let the random hex code be assigned to a  random number between 0 and 16777215 and covert to a string with a parameter of 16

  document.body.style.backgroundColor = "#" + randomHex; //style the body with #randomHex

}
//extra credit: adds timing function with the setInterval() method to print a new quote to the page at regular intervals
const intervalID = setInterval(printQuote, 1200);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);