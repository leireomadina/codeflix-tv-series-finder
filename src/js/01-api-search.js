//** 01 - API

// Prevents unnecessary API requests
const handleSearch = () => {
	if (searchInput.value === '') {
		handleEmptySearch();
	} else {
		getDataFromApi();
	}
};

// TVMaze API connection
const getDataFromApi = async () => {
	const ENDPOINT = '//api.tvmaze.com/search/shows?q=';
	const userSearch = searchInput.value;

	try {
		const resp = await fetch(`${ENDPOINT} + ${userSearch}`);
		if (!resp.ok)
			throw 'Im sorry, there has been a server error. Try again later!';
		const data = await resp.json();
		if (Object.entries(data).length === 0) {
			handleNotFound();
		} else {
			searchedShows = data;
			resultsContainer.classList.add('hide');
			tipsContainer.classList.remove('hide');
			createParagraph(
				'Select a TV show to add it as favorite:)',
				tipsContainer
			);
			createParagraph(
				'First you need to write the name of a TV show :)',
				resultsContainer
			);
			createParagraph('', resultsContainer);
			paintShows();
			listenShows();
			listenFavs();
		}
	} catch (error) {
		handleServerError(error);
	}
};

const createParagraph = (innerContent, outerContainer) => {
	const newParagraph = `<p class="error-message">${innerContent}</p>`;
	return (outerContainer.innerHTML = newParagraph);
};

const handleBackgroundImage = () => {
	showsContainer.innerHTML = '';
	pageWrapper.classList.remove('page-wrapper');
	pageWrapper.classList.remove('hidden-bg');
	pageWrapper.classList.add('not-found');
};

const handleEmptySearch = () => {
	resultsContainer.classList.remove('hide');
	createParagraph(
		'First you need to write the name of a TV show :)',
		resultsContainer
	);
	handleBackgroundImage();
};

const handleNotFound = () => {
	resultsContainer.classList.remove('hide');
	createParagraph(
		'Oops, that show is not on our database. Try again!',
		resultsContainer
	);
	handleBackgroundImage();
};

const handleServerError = (error) => {
	resultsContainer.classList.remove('hide');
	createParagraph(
		'Im sorry, there has been a server error. Try again later!',
		resultsContainer
	);
	handleBackgroundImage();
};

searchButton.addEventListener('click', handleSearch);
