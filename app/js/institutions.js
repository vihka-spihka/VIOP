window.onload = function () {

var countriesList = document.getElementById('dropdownCountriesList');

var listCountries = [
'enhancement',
'bug',
'duplicate',
'invalid',
'wontfix'
];

for (var i = 0; i < listCountries.length; i++) {
	var item = listCountries[i];
	var elem = document.createElement("li");
	elem.textContent = item;
	elem.value = item;
	countriesList.appendChild(elem);
	elem.classList.add('dropdownCountriesList__item');
}


countriesList.addEventListener('click', function(event) {
	event.stopPropagation();
	var countriesListText = document.getElementsByClassName('dropdownCountriesBtn__text')[0];
	text = event.target.innerText;
	countriesListText.innerHTML = "";
	countriesListText.innerText = text;
	}, false);
}