

const randomQuotes = [
    {
        quote: '"Be yourself; everyone else is already taken."',
		source: 'Oscar Wilde',
    },
    {
        quote: '"What we think, we become"',
		source: 'Buddha',
    },
    {
        quote: '"It always seems impossible until it is done."',
		source: 'Nelson Mandela',
    },
    {
        quote: '"So many books, so little time."',
	    source: 'Frank Zappa',
    },
    {
        quote: '"That\'s one small step for man, one giant leap for mankind."',
		source: 'Neil Armstrong',
    },
    {
        quote: '"Not everything that can be counted counts, and not everything that counts can be counted."',
		source: 'Albert Einstein',
    },

]

function print(message) {
    const quoteWrapper = document.querySelector('#quote-box');
    quoteWrapper.innerHTML = message;
}


function getRandomQuote() {
    let displayedQuotes = [];
    const createNum = Math.floor(Math.random() * randomQuotes.length);
    const splicedQuote = randomQuotes.splice(createNum, 1)[0];
    return splicedQuote;
}

function printQuote() {
    let quotes = getRandomQuote();
    let msgToDisplay = '';
    msgToDisplay = '<p class="quote">' + quotes.quote + '</p>';
    msgToDisplay += '<p class="source">' + quotes.source + '</p';
    print(msgToDisplay);
}

printQuote();