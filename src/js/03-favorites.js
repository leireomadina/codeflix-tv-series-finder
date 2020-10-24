//** Favorites

//empty array to store favorite shows
let favoritedShows = [];

function selectFavorites(event) {
  //gets the id of each selected item 
  const selectedShow = event.currentTarget;
  const selectedShowId = parseInt(selectedShow.dataset.id);
  const selectedShowName = selectedShow.querySelector(".shows-list__title").innerHTML;
  const selectedShowImage = selectedShow.querySelector(".shows-list__img").src;
  // console.log(selectedShow);
  // console.log(selectedShowId);
  //objeto constructor
  let favShow = {
    id: selectedShowId,
    name: selectedShowName,
    image: selectedShowImage
  }

  const favoriteIndex = favoritedShows.indexOf(selectedShowId);
  const isFavorite = favoriteIndex != -1;
  // console.log(isFavorite);
 if (selectedShowId != null) {
  //push selected item into the array
  console.log("Lo meto en el array");
  favoritedShows.push(favShow);
  console.log(favoritedShows);
  selectedShow.classList.add("shows-list__item--favorite");
  paintFavorites();
 } else {
   //remove selected item from the array
  favoritedShows.splice(favoriteIndex,1);
  selectedShow.classList.remove("shows-list__item--favorite");
  console.log("Lo quito del array");
  console.log(favoritedShows);
  paintFavorites();
 }
//  paintFavorites();
}

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", selectFavorites);
  }
}
