//** 03 - Select and remove favorites

// Arrays to store favorited shows info
let favoritedShows = [];
// this adittional array is needed to store the id of each selected show
let favoritedShowsId = [];

// Selects and removes favorited items
function selectFavorites(event) {
  const selectedShow = event.currentTarget;
  const selectedShowId = parseInt(selectedShow.dataset.id);
  //gets the name and image from each show in the paint-shows js file
  const selectedShowName = selectedShow.querySelector(".shows-list__title")
    .innerHTML;
  const selectedShowImage = selectedShow.querySelector(".shows-list__img").src;
  // console.log("elemento clickado", selectedShow);
  // console.log("id del elemento clickado", selectedShowId);

  // constructor object to create an object template for each favorited show
  let favShow = {
    id: selectedShowId,
    name: selectedShowName,
    image: selectedShowImage,
  };

  console.log({favoritedShows});
    
  //to get the id of each favorited show and store it in the favoritedShowsId array: we need this in order to use the indexOf and splice method later
  favoritedShowsId = favoritedShows.map(function (element) {
    return parseInt(element.id);
  });

  //checks if the item is already in the favorite array
  const favoriteIndex = favoritedShowsId.indexOf(selectedShowId);
  if (favoriteIndex === -1) {
    //adds the selected item into the array
    favoritedShows.push(favShow);
    selectedShow.classList.add("shows-list__item--favorite");
  } else {
    //removes selected item from the array
    favoritedShows.splice(favoriteIndex, 1);
    selectedShow.classList.remove("shows-list__item--favorite");
  }
  paintFavorites();
  listenFavs();
  setLocalStorage();
}

// Listens to the rendered items in the results section
function listenShows() {
  const showItems = document.querySelectorAll(".js-show-item");
  for (const showItem of showItems) {
    showItem.addEventListener("click", selectFavorites);
  }
}
