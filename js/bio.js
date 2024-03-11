let quoteEl = document.querySelector('#quote');
let quoteAuthorEl = document.querySelector('#quote-author');
let refreshButton = document.querySelector('#refresh');

let quotes = [
    { quote: "If the door doesn't open, it's not your door..", author: "Jasmine"},
    { quote: "Luck is where preparation meets opportunity", author: "Seneca"},
    { quote: "Know thy self", author: "Socrates"},
    { quote: "Carpe Diem, Seize the Day!", author: "Horace"},
    { quote: `Learn: What you love, What you are good at, What the world needs, What you can be paid for`, author: "Ikigai"},
    { quote: "The greatness of a persons power is the measure of their ability to surrender", author: "William Booth"},
    { quote: "Be humble, or you'll stumble", author: "D.L. Moody"},
    { quote: "Happiness is a choice, choose wisely", author: "Jasmine"},
]

let randomQuote = () => {
    let random = quotes[(Math.floor(Math.random() * quotes.length))];
    console.log(random);
    quoteEl.innerHTML = `"${random.quote}"`;
    quoteAuthorEl.innerHTML = `- ${random.author}`; 
}

document.addEventListener('load', randomQuote());
refreshButton.addEventListener('click', randomQuote)