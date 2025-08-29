// Copy Quote
const copyQuote = () => {
  let quoteText = document.getElementById("quote-text").innerText;
  navigator.clipboard.writeText(quoteText)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(err => console.error("Error copying quote:", err));
};

// Generate Quote
const generateQuote = () => {
  fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote-text").innerText = data.quote;
      document.getElementById("author").innerText = `- ${data.author}`;
    })
    .catch(err => {
      console.error("Error fetching quote:", err);
      document.getElementById("quote-text").innerText = "Failed to load quote.";
      document.getElementById("author").innerText = "- Error";
    });
};
