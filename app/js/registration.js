window.onload = function () {

var countriesList = document.getElementById('dropdownCountriesList');
var citiesList = document.getElementById('dropdownCitiesList');
var submitBtn = document.getElementById('submitBtn__btn');

var listCountries = [
'enhancement',
'bug',
'duplicate',
'invalid',
'wontfix'
];

var listCities = [
'en1111nt',
'bu222g',
'dupl333icate',
'inv44alid',
'won55tfix'
];

for (var i = 0; i < listCountries.length; i++) {
	var item = listCountries[i];
	var elem = document.createElement("li");
	elem.textContent = item;
	elem.value = item;
	countriesList.appendChild(elem);
	elem.classList.add('dropdownCountriesList__item');
}

for (var i = 0; i < listCities.length; i++) {
	var item = listCities[i];
	var elem = document.createElement("li");
	elem.textContent = item;
	elem.value = item;
	citiesList.appendChild(elem);
	elem.classList.add('dropdownCitiesList__item');
}

countriesList.addEventListener('click', function(event) {
	event.stopPropagation();
	var countriesListText = document.getElementsByClassName('dropdownCountriesBtn__text')[0];
	text = event.target.innerText;
	countriesListText.innerHTML = "";
	countriesListText.innerText = text;
	$('.country__dropdownCountriesList').removeClass('open');
	}, false);

citiesList.addEventListener('click', function(event) {
	event.stopPropagation();
	var citiesListText = document.getElementsByClassName('dropdownCitiesBtn__text')[0];
	text = event.target.innerText;
	citiesListText.innerHTML = "";
	citiesListText.innerText = text;
	$('.city__dropdownCitiesList').removeClass('open');
	}, false);

// Event listener for submit button

// submitBtn.addEventListener('click', function(event) {});

}
