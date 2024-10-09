const quotes= [
    "You are the good you represent",
    "what comes from the inside make us bad",
    "You are awesome",
    "how are your thoughts today",
    "nice to see you",
    "what should it make you feel"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if (usedIndexes.size === quotes.length) {
        usedIndexes.clear(); // Clear used indexes when all quotes have been used
    }

    while(true){
        const randomIndx = Math.floor(Math.random()* quotes.length)

        if(usedIndexes.has(randomIndx))continue


        const quote =  quotes[randomIndx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndx)
        break
    }

    
}