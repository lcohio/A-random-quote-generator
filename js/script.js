
// THIS ARRAY CONTAINS OBJECTS THAT ARE RANDOMLY SELECTED AND RENDERED INTO #loadQuote

const quotesArray = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        source: 'Patrick McKenzie',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'It always seems impossible until it is done.',
        source: 'Nelson Mandela',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'So many books, so little time.',
        source: 'Frank Zappa',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'That\'s one small step for man, one giant leap for mankind.',
        source: 'Neil Armstrong',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'Not everything that can be counted counts, and not everything that counts can be counted.',
        source: 'Albert Einstein',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'Wisely, and slow. They stumble that run fast.',
        source: 'William Shakespeare',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'You only pass through this life once, you don\'t come back for an encore.',
        source: 'Elvis Presley',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'In the long run, the sharpest weapon of all is a kind and gentle spirit.',
        source: 'Anne Frank',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'Questions provide the key to unlocking our unlimited potential.',
        source: 'Anthony Robbins',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },
    {
        quote: 'Don\'t find fault, find a remedy; anybody can complain.',
        source: 'Henry Ford',
        citation: 'test',
        year: '2019',
        tag: 'Wisdom',
    },

]

// FUNCTIONS

function getRandomQuote() {
    const randomQuoteObj = quotesArray[Math.floor(Math.random()*quotesArray.length)];
    return randomQuoteObj; 
}

function randomColorGenerator() {
    let red, green, blue;
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

function printQuote() {
    const randomQuoteObj = getRandomQuote();
    let msgToDisp = `
        <p class="quote">${randomQuoteObj.quote}</p>
        <p class="source">${randomQuoteObj.source}
    `
    if (randomQuoteObj.citation) {
        msgToDisp += `<span class="citation">${randomQuoteObj.citation}</span>`;
    }
    if (randomQuoteObj.year) {
        msgToDisp += `<span class="year">${randomQuoteObj.year}</span></p>`;	
    }
    if (randomQuoteObj.tag) {
        msgToDisp += `<p class="tag">${randomQuoteObj.tag}</p>`;
    }
    document.getElementById('quote-box').innerHTML = msgToDisp;    
    document.body.style.backgroundColor = randomColorGenerator();
}

// EVENT HANDLERS

setInterval(function(){ 
    printQuote(); 
}, 20000);

document.addEventListener("DOMContentLoaded", function() {
    printQuote();
});

document.getElementById('loadQuote').addEventListener("click", printQuote);








