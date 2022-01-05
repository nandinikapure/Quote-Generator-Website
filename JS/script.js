const text = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('.twitter-share-button');
const nextBtn = document.querySelector('.next');

const getQuote = async() => {
    const res = await fetch(`https://type.fit/api/quotes`);
    const quotes = await res.json();
    const num = Math.floor(Math.random() * quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const author = item.author;
    text.innerText = quote;
    auth.innerText = author;
    button.href = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
}

nextBtn.addEventListener('click', getQuote);

getQuote();