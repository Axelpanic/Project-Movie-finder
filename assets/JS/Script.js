// Project by Sam, JJ, and Alex
searchInput = document.querySelector('#search-input')

// function prevents a default search input
function FormSubmitEvent(event) {
    event.preventDefault();

    var inputValue = document.querySelector('#search-input').value;

  if (!inputValue) {
    alert('Must search a movie');
    return;
  }
searchApi(inputValue)
}

function searchApi(movieName){
    console.log(movieName);
    
    // Generated API key
    // http://www.omdbapi.com/?i=tt3896198&apikey=639261e3

    fetch ('http://www.omdbapi.com/?i=tt3896198'+ movieName + "&apikey=639261e3")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
        })

}

document.getElementById("myBtn").addEventListener("click", displaySearch);

function displaySearch() {
  document.getElementById("input").innerHTML = searchInput();
}

displaySearch();