//** 02 - Paint search results

const paintShows = () => {
  let htmlShows = "";
  for (let i = 0; i < searchedShows.length; i++) {
    const showName = searchedShows[i].show.name;
    const searchedShowId = searchedShows[i].show.id;
    htmlShows += `<li class="shows-list__item js-show-item" data-id="${searchedShowId}">`;
    // Not all API shows have image
    if (searchedShows[i].show.image != null) {
      let imgURL = searchedShows[i].show.image.original;
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      imgURL = "./assets/images/nopicture.png";
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" class="shows-list__img">`;
    }
    htmlShows += `<h3 class="shows-list__title">${showName}</h3>`;
    htmlShows += `</li>`;
    // Removes the background hitchcock image before the cards render
    pageWrapper.classList.add("hidden-bg");
  }
  showsContainer.innerHTML = htmlShows;
};

