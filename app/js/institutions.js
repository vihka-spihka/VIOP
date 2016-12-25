window.onload = function () {

	var citiesList = document.getElementById('dropdownCitiesList');
	var addToFav = document.getElementsByClassName('favourites__addToFavourites');
	var removeFromFav = document.getElementsByClassName('favourites__deleteFromFavourites');

	var listCities = [
	'enhancement',
	'bug',
	'duplicate',
	'invalid',
	'wontfix'
	];

	for (var i = 0; i < listCities.length; i++) {
		var item = listCities[i];
		var elem = document.createElement("li");
		elem.textContent = item;
		elem.value = item;
		citiesList.appendChild(elem);
		elem.classList.add('dropdownCitiesList__item');
	}


	citiesList.addEventListener('click', function(event) {
		event.stopPropagation();
		var citiesListText = document.getElementsByClassName('dropdownCitiesBtn__text')[0];
		text = event.target.innerText;
		citiesListText.innerHTML = "";
		citiesListText.innerText = text;
		$('.cities__dropdownCitiesList').removeClass('open');
		}, false);

	// дб учет того, что не только 0ой элемент мб доб в избранные

	addToFav[0].addEventListener('click', function(event) {
		$('.favourites__addToFavourites').hide();
		$('.favourites__deleteFromFavourites').show();
	});

	removeFromFav[0].addEventListener('click', function(event) {
		$('.favourites__deleteFromFavourites').hide();
		$('.favourites__addToFavourites').show();
	});

}