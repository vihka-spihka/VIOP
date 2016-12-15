$(document).ready(function(){
	ymaps.ready(function(){
	var geolocation = ymaps.geolocation;
	$('#siteHeader__location--current').html(geolocation.country + ', ' + geolocation.city);
	});
});

//  + ' (' + geolocation.region + ')'