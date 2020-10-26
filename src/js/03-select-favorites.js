//** 03 - Select and remove favorites

// Arrays to store favorited shows

let favoritedShows = [];
// this special array is needed to store the id of each selected show
let favoritedShowsId = [];

function selectFavorites(event) {
  const selectedShow = event.currentTarget;
  const selectedShowId = parseInt(selectedShow.dataset.id);
  const selectedShowName = selectedShow.querySelector(".shows-list__title")
    .innerHTML;
  const selectedShowImage = selectedShow.querySelector(".shows-list__img").src;
  console.log("elemento clickado", selectedShow);
  console.log("id del elemento clickado", selectedShowId);

  // constructor object to create an object template for each favorited show
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
    // paintFavorites();
  } else {
    //remove selected item from the array
    console.log(favShow);
    favoritedShows.splice(indFavorite, 1);
    selectedShow.classList.remove("shows-list__item--favorite");
    console.log("Lo quito del array");
    console.log(favoritedShows);
  }
  paintFavorites();
  listenFavs();
  setLocalStorage();
}

// Listens to each rendered item in the results section

function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", selectFavorites);
  }
}
