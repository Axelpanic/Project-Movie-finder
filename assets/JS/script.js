// Project by Sam, JJ, and Alex
var inputEl = document.querySelector('#search-input');
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var mainEl = document.getElementById('IMDB')
var sideEl = document.getElementById('sidebar')

document.getElementById("button").addEventListener("click", formSubmitEvent);
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
var imgUrl='';
}


function searchApi(inputValue) {
    console.log(inputValue);
    var imdbId = ""
    // Generated API key
    // https://www.omdbapi.com/?i=tt3896198&apikey=639261e3

    fetch ('https://www.omdbapi.com/?t='+ inputValue + "&apikey=639261e3")
        .then((response) => response.json())
        .then((data) => { a = data;
            console.log(a);
            var imdbId = a.imdbID;
            console.log(imdbId);
            fetch('https://imdb-api.com/en/API/Title/k_u1amb416/' + imdbId, requestOptions)
              .then(response => response.json())
              .then((data) => { 
                console.log(data);
                document.getElementById('title').textContent = data.title;
                document.getElementById('plot').textContent = data.plot;
                document.getElementById('stars').textcontent = data.stars;
                document.getElementById('released').textcontent = data.releaseDate;
                document.getElementById('runtime').textcontent = data.runtimeStr;  
                var posterEl = document.getElementById('poster');
                var imgUrl = document.createElement('img');
                imgUrl.setAttribute('src',data.image);
                posterEl.appendChild(imgUrl);    
        })})}

//imdb api key = k_u1amb416 (limit 1k a day)

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
