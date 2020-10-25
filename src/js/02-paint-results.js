//** Paint search results  

const showsContainer = document.querySelector(".js-shows-container");

function paintShows() {
  let htmlShows = "";
  //loop to get the name and img of each show
  for (let i = 0; i < searchedShows.length; i++) {
    //MEJORA 1: usar DOM avanzado
    //MEJORA 2: crear un objeto vacío ¿? => let showItem = {};
    // console.log(searchedShows[i].show.name);
    // console.log(searchedShows[i].show.image.medium);
    // let showImage = searchedShows[i].show.image.medium;
    const showName = searchedShows[i].show.name;
    const searchedShowId = searchedShows[i].show.id;
    htmlShows += `<li class="shows-list__item js-show-item" data-id="${searchedShowId}">`;
    //find id of each show => in order to link it with favs
    // console.log(searchedShowId);
    if (searchedShows[i].show.image != null) {
      let imgURL = searchedShows[i].show.image.medium;
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      imgURL =
        "./assets/images/noimg.jpg";
      htmlShows += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img">`;
    }
    htmlShows += `<h3 class="shows-list__title">${showName}</h3>`;
    htmlShows += `</li>`;
  }
  showsContainer.innerHTML = htmlShows;
}