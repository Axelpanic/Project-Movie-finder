// Project by Sam, JJ, and Alex
var inputEl = document.querySelector('#search-input');
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

document.getElementById("button").addEventListener("click", formSubmitEvent);

//function displaySearch() {
// document.getElementById("#search-input") = inputValue;
//}
//displaySearch(inputValue);

// function prevents a default search input
function formSubmitEvent(event) {
    event.preventDefault();

    const inputValue = document.querySelector('#search-input').value;
    
    // CHANGE TO MODAl
  if (!inputValue) {
    alert('Must search a movie');
    return;
  }
searchApi(inputValue)

}

function searchApi(inputValue) {
    console.log(inputValue);
    var imdbId = ""
    // Generated API key
    // http://www.omdbapi.com/?i=tt3896198&apikey=639261e3

    fetch ('http://www.omdbapi.com/?t='+ inputValue + "&apikey=639261e3")
        .then((response) => response.json())
        .then((data) => { a = data;
            console.log(a);
            var imdbId = a.imdbID;
            console.log(imdbId);
            fetch('https://imdb-api.com/en/API/Title/k_u1amb416/' + imdbId, requestOptions)
              .then(response => response.json())
              .then(result => console.log(result))
              
            })
            
    
  .catch(error => console.log('error', error));
}

//imdb api key = k_u1amb416 (limit 1k a day)


