//** 02 - Paint search results  

// Get wrapper and container elements

const showsContainer = document.querySelector(".js-shows-container");
const wrapperEl = document.querySelector(".page-wrapper");

// Function to render the shows after the user's search

function paintShows() {
  let htmlShows = "";
  //loop to get the name and image of each show in the array
  for (let i = 0; i < searchedShows.length; i++) {
    const showName = searchedShows[i].show.name;
    //finds the API id of each show: unique element in order to identify each show
    const searchedShowId = searchedShows[i].show.id;
    htmlShows += `<li class="shows-list__item js-show-item" data-id="${searchedShowId}">`;
    //this conditional statements are needed because there are some shows that have no image in the API data
    if (searchedShows[i].show.image != null) {
      let imgURL = searchedShows[i].show.image.original;
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      imgURL =
        "./assets/images/nopicture.png";
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" class="shows-list__img">`;
    }
    htmlShows += `<h3 class="shows-list__title">${showName}</h3>`;
    htmlShows += `</li>`;
    //removes the background hitchcock image before the show cards render
    wrapperEl.classList.add("hidden");
  }
  showsContainer.innerHTML = htmlShows;
}