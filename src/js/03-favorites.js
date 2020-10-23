//** Favorites

//array vacía donde meteremos cada elemento seleccionado como favorito
let favoritedShows = [];

function saveFavorite(event) {
  //gets the id of each selected item 
  const selectedShow = event.currentTarget.id;
  console.log(selectedShow);
  //searchs if the item is already in the array (different from -1)
  const isFavorite = favoritedShows.indexOf(selectedShow);
  console.log(isFavorite);
 if (isFavorite === -1) {
  //push that item into the array
  console.log("Lo meto en el array");
  favoritedShows.push(selectedShow);
  console.log(favoritedShows);
 } else {
  console.log("Lo quito del array");
  console.log(favoritedShows);

 }
 
}

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", saveFavorite);
  }
}
