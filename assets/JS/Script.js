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

const modal = document.getElementById("modal-js-example")

function openModal() {
    modal.classList.add("is-active")
}

// const modalExit = document.getElementById("modal-close");
// modalCloseButton.addEventListener('click', 'modal-modalCloseButton');
// e.stopPropagation();
// modal.classList.remove('is-active');

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    // function closeAllModals() {
    //   (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    //     closeModal($modal);
    //   });
    // }
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
  });