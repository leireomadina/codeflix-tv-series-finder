//** Favorites

//array vacía donde meteremos cada elemento seleccionado como favorito
let favoritedShows = [];

function saveFavorite(event) {
  //gets the id of each selected item 
  const selectedShow = event.currentTarget.id;
  console.log(selectedShow);
  //push that item into the array
  favoritedShows.push(selectedShow);
  console.log(favoritedShows);
}

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", saveFavorite);
  }
}
