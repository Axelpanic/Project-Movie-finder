// Project by Sam, JJ, and Alex
var inputEl = document.querySelector('#search-input');
//var a = "alpha"

document.getElementById("button").addEventListener("click", formSubmitEvent);

//function displaySearch() {
// document.getElementById("#search-input") = inputValue;
//}
//displaySearch(inputValue);

// function prevents a default search input
function formSubmitEvent(event) {
    event.preventDefault();

    var inputValue = document.querySelector('#search-input').value;
    let wikiUrl = 'https//api.wikimedia.org/core/v1/wikipedia/en/search/title?q=' + inputValue + "&limit=5";

    // CHANGE TO MODAl
  if (!inputValue) {
    alert('Must search a movie');
    return;
  }
searchApi(inputValue)
wikiApi(wikiUrl)
}

function searchApi(inputValue) {
    console.log(inputValue);
    
    // Generated API key
    // http://www.omdbapi.com/?i=tt3896198&apikey=639261e3

    fetch ('http://www.omdbapi.com/?t='+ inputValue + "&apikey=639261e3")
        .then(response => response.json())
        .then(data => { a = data;
            console.log(a)
            })
       
}

//Wiki api key
//Client ID: 5d8f2b1c6489f22db36ff531382c134c
//Client secret: d3e70f33c20e1aca08797c50620b465a0feb8b2e

function wikiApi(wikiUrl) {
  let response = fetch( wikiUrl,
    {
        headers: {
            'Authorization': '5d8f2b1c6489f22db36ff531382c134c d3e70f33c20e1aca08797c50620b465a0feb8b2e',
            'Api-User-Agent': 'Project movei finder'
        }
    }
);
response.json()
    .then(console.log).catch(console.error);
  }
