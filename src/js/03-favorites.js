//** Favorites

//empty array to store favorite shows
let favoritedShows = [];

function selectFavorites(event) {
  //gets the id of each selected item 
  const selectedShow = event.currentTarget;
  const selectedShowId = parseInt(selectedShow.dataset.id)
  const selectedShowName = selectedShow.querySelector(".shows-list__title").innerHTML;
  // console.log(selectedShowName);
  const selectedShowImage = selectedShow.querySelector(".shows-list__img").src;
  // console.log(selectedShow);
  console.log(selectedShowId);
  // OBJECTO CONSTRUCTOR
  let favShow = {
    id: selectedShowId,
    name: selectedShowName,
    image: selectedShowImage
  }
 
  const favoriteIndex = favoritedShows.indexOf(favShow);
  // const isFavorite = favoriteIndex != -1;
  // console.log(isFavorite);
  console.log(favoriteIndex);
 if (!selectedShow.classList.contains("shows-list__item--favorite")) {
  //push selected item into the array
  console.log("Lo meto en el array");
  favoritedShows.push(favShow);
  console.log(favoritedShows);
  selectedShow.classList.add("shows-list__item--favorite");
  // paintFavorites();

 } else {
   //remove selected item from the array
  favoritedShows.splice(favoriteIndex,1);
  selectedShow.classList.remove("shows-list__item--favorite");
  console.log("Lo quito del array");
  console.log(favoritedShows);
  // paintFavorites();

 }
   paintFavorites();
}

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", selectFavorites);
  }
}
