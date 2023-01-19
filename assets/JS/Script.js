// Project by Sam, JJ, and Alex
var inputEl = document.querySelector('#search-input');

document.getElementById("butt").addEventListener("click", formSubmitEvent);
var searchInput = document.querySelector("#search-input");

// function prevents a default search input
function formSubmitEvent(event) {
    event.preventDefault();

    var inputValue = document.querySelector('#search-input').value;

  if (!inputValue) {
    openModal();
    return;
  }
    storeSearchHistory(inputValue);

searchApi(inputValue)
}


function searchApi(inputValue) {
    console.log(inputValue);
    
    // Generated API key
    // http://www.omdbapi.com/?i=tt3896198&apikey=639261e3

    fetch ('http://www.omdbapi.com/?t='+ inputValue + "&apikey=639261e3")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
        })

        
}
//commit to local storage
function getSearchHistory() {
    var history = localStorage.getItem("searchHistory");

    if (history === null) {
        return [];
    } else {
        return JSON.parse(history);
    }
};

function storeSearchHistory(movieTitle) {
    var history = getSearchHistory();
    history.push(movieTitle);
    localStorage.setItem("searchHistory", JSON.stringify(history));
};

const modal = document.getElementById("no-movie-found")

function openModal() {
    modal.classList.add("is-active")
}
// function closes modal 
const modalExit = document.getElementById("closeButton");
modalExit.addEventListener('click', function() {
  modal.classList.remove("is-active");
});