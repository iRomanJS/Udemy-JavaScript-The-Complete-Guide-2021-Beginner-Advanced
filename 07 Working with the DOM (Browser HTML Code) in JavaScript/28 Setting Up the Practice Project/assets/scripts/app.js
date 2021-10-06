const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
// const userInput = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const mainUl = document.querySelector('main ul');
const deleteMovieModal = document.getElementById('delete-modal');



const movies = [];

function toggleBackdrop() {
    backdrop.classList.toggle("visible");
  }

function closeMovieModal() {
    addMovieModal.classList.remove('visible');
    clearMovieInputs();
}

function showMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
}

function clearMovieInputs() {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
}

function backdropClickHandler() {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs();
}

function cancelMovieHandler() {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
}

function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue) > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  } 

  const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI ();
  
}

function updateUI () {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }

}

function closeMovieDeletionModal() {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

function deleteMovieHandler(movieId) {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    deleteMovieModal.classList.remove('visible');
    // listRoot.removeChild(listRoot.children[movieIndex]);
    closeMovieDeletionModal();
    updateUI();
}

function startDeleteMovieHandler(movieId) {    
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId));
    
    cancelDletionButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));


}

function renderNewMovieElement(id, title, imageUrl, rating) {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
        `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}


startAddMovieButton.addEventListener("click", showMovieModal);
cancelAddMovieButton.addEventListener("click", cancelMovieHandler);
backdrop.addEventListener("click", backdropClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);

console.log(addMovieModal.previousElementSibling);

