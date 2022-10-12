//** 00 - VARIABLES

const searchInput = document.querySelector(".js-search");
const searchButton = document.querySelector(".js-btn");
const deleteButton = document.querySelector(".js-delete-btn");

const pageWrapper = document.querySelector(".page-wrapper");

const resultsContainer = document.querySelector(".js-results-container");
const showsContainer = document.querySelector(".js-shows-container");
const tipsContainer = document.querySelector(".js-tips-container");
const favsContainer = document.querySelector('.js-favs-container');
const noFavsContainer = document.querySelector('.js-no-favs-container');

let searchedShows = [];
let favoritedShows = [];
// Adittional array to store the id of each selected show
let favoritedShowsId = [];