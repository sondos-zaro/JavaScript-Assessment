const list = document.getElementById("list");
let quote_arr = [];



const loadQuotes = async() => {
    try {
        const res = await fetch('https://dummyjson.com/quotes');
        quote_arr = await res.json();
        console.log(quote_arr);
        displayQuotes(quote_arr.quotes);

    } catch (err) {
        console.error(err);
    }
};


const displayQuotes = (quotes) => {

const htmlString=quotes.map(quote => {
   
        return `
        <li>${quote.quote}--${quote.author}</li>
`
    }).join('');
    list.innerHTML = htmlString;
}

loadQuotes()