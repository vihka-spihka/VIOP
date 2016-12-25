$(document).ready(function() {
	
	$("#item__page").on('click', function() {
		$("#content__myInfo").show();
		$("#content__myMsg").hide();
		$("#content__myInstitutions").hide();
		$("#content__myFavourites").hide();
		$("#content__myApplications").hide();
	});

	$("#item__msg").on('click', function() {
		$("#content__myMsg").show();
		$("#content__myInfo").hide();
		$("#content__myInstitutions").hide();
		$("#content__myFavourites").hide();
		$("#content__myApplications").hide();
	});

	$("#item__institutions").on('click', function() {
		$("#content__myInstitutions").show();
		$("#content__myInfo").hide();
		$("#content__myMsg").hide();
		$("#content__myFavourites").hide();
		$("#content__myApplications").hide();
	});

	$("#item__favourites").on('click', function() {
		$("#content__myFavourites").show();
		$("#content__myInfo").hide();
		$("#content__myMsg").hide();
		$("#content__myInstitutions").hide();
		$("#content__myApplications").hide();
	});

	$("#item__applications").on('click', function() {
		$("#content__myApplications").show();
		$("#content__myInfo").hide();
		$("#content__myMsg").hide();
		$("#content__myInstitutions").hide();
		$("#content__myFavourites").hide();
	});

	var applicationsList = document.getElementsByClassName('dropdownApp__appList');

	applicationsList[0].addEventListener('click', function(event) {

		event.stopPropagation();
		var rolesListText = document.getElementById('dropdownApp__appBtn--text');
		text = event.target.innerText;
		rolesListText.innerHTML = "";
		rolesListText.innerText = text;
		$('#appBody__dropdownApp').removeClass('open');
		}, false);

});