//** Favorites

//empty array to store favorite shows
let favoritedShows = [];

function saveFavorite(event) {
  //gets the id of each selected item 
  const selectedShow = event.currentTarget;
  const selectedShowId = selectedShow.id;
  // console.log(selectedShow);
  // console.log(selectedShowId);
  //searchs if the item is already in the array (if it is different from -1) and gets his position within it
  const favoriteIndex = favoritedShows.indexOf(selectedShowId);
  const isFavorite = favoriteIndex != -1;
  // console.log(isFavorite);
 if (isFavorite === false) {
  //push selected item into the array
  // console.log("Lo meto en el array");
  favoritedShows.push(selectedShowId);
  console.log(favoritedShows);
  selectedShow.classList.add("shows-list__item--favorite");
 } else {
   //remove selected item from the array
  favoritedShows.splice(favoriteIndex,1);
  selectedShow.classList.remove("shows-list__item--favorite");
  // console.log("Lo quito del array");
  console.log(favoritedShows);
 }
}

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", saveFavorite);
  }
}
