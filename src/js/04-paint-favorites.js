//** Paint favorites 
const favsContainer = document.querySelector(".js-favs-container");

function paintFavorites() {
  // console.log("Holi, escucho a favs");
  let htmlFavShows = "";
  // console.log(favoritedShows);

  for (let i = 0; i < favoritedShows.length; i++) {
    const showFavName = favoritedShows[i].name;
    const showFavId = favoritedShows[i].id;
    const showFavImage = favoritedShows[i].image;
    console.log(showFavName);
    htmlFavShows += `<li data-id="${showFavId}" class="favorites-list__item">`;
    if(favoritedShows[i].image != null) {
      // let imgFavURL = favoritedShows[i].show.image.medium;
      htmlFavShows += `<img src="${showFavImage}" alt="Imagen de la serie ${showFavName}" style="height: 200px" class="favorites-list__img" title="Imagen de la serie ${showFavName}"></img>`;
    } else {
      showFavImage =
        "https://via.placeholder.com/210x295/ffffff/666666/?";
      htmlShows += `<img src="${showFavImage}" alt="Imagen de la serie ${showFavName}" style="height: 200px" class="favorites-list__img`;
    }
    htmlFavShows += `<h4 class="shows-list__title">${showFavName}</h4>`;
    htmlFavShows += `</li>`;

  }
  favsContainer.innerHTML = htmlFavShows;
  // console.log(htmlFavShows);
  // console.log(searchedShows);

}
  // paintFavorites();

/*

<li class="favorites-list__item" id="">
        <img src="./assets/images/lost.jpg" alt="Imagen de la serie Lost" style="height: 100px" class="favorites-list__img" title="Imagen de la serie Lost">
        <h4 class="favorites-list__title">Lost</h4>
      </li>

*/