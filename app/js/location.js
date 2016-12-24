$(document).ready(function(){
	ymaps.ready(function(){
	var geolocation = ymaps.geolocation;
	$('#siteHeader__location')
	.html(geolocation.country + ', ' + geolocation.city);
	});
});

//  + ' (' + geolocation.region + ')'