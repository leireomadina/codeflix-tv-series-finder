//** Paint function 

const showsContainer = document.querySelector(".js-shows-container");

function paintShows() {
  let htmlShow = "";
  //loop to get the name and img of each show
  for (let i = 0; i < searchedShows.length; i++) {
    //MEJORA 1: usar DOM avanzado
    //MEJORA 2: crear un objeto vacío ¿? => let showItem = {};
    // console.log(searchedShows[i].show.name);
    // console.log(searchedShows[i].show.image.medium);
    // let showImage = searchedShows[i].show.image.medium;
    const showName = searchedShows[i].show.name;
    htmlShow += `<li class="shows-list__item js-show-item" id="${i}">`;
    if (searchedShows[i].show.image != null) {
      let imgURL = searchedShows[i].show.image.medium;
      htmlShow += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img" title="Imagen de la serie ${showName}"></img>`;
    } else {
      imgURL =
        "https://via.placeholder.com/210x295/ffffff/666666/?";
      htmlShow += `<img src="${imgURL}" alt="Imagen de la serie ${showName}" style="height: 200px" class="shows-list__img`;
    }
    htmlShow += `<h3 class="shows-list__title">${showName}</h3>`;
    htmlShow += `</li>`;
  }
  showsContainer.innerHTML = htmlShow;
}