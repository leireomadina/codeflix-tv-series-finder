//** Favorites

//empty array to store favorite shows
let favoritedShows = [];
let favoritedShowsId = [];

function selectFavorites(event) {
  //gets the id of each selected item
  const selectedShow = event.currentTarget;
  const selectedShowId = parseInt(selectedShow.dataset.id);
  const selectedShowName = selectedShow.querySelector(".shows-list__title")
    .innerHTML;
  const selectedShowImage = selectedShow.querySelector(".shows-list__img").src;
  console.log("elemento clickado", selectedShow);
  console.log("id del elemento clickado", selectedShowId);
  //objeto constructor
  let favShow = {
    id: selectedShowId,
    name: selectedShowName,
    image: selectedShowImage,
  };

  //array de ids de favoritos
  favoritedShowsId = favoritedShows.map(function (element) {
    return parseInt(element.id);
  });

  console.log("array de ids", favoritedShowsId);
  const indFavorite = favoritedShowsId.indexOf(selectedShowId);
  console.log("index de array de ids", indFavorite);
  console.log("serie fav de objecto constructor", favShow);
  // const isFavorite = favoriteIndex != -1;
  if (indFavorite === -1) {
    //push selected item into the array
    console.log("Lo meto en el array");
    favoritedShows.push(favShow);
    console.log(favoritedShows);
    selectedShow.classList.add("shows-list__item--favorite");
    paintFavorites();
  } else {
    console.log(favShow);
    //remove selected item from the array
    favoritedShows.splice(indFavorite, 1);
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
