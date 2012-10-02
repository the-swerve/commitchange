
function dayDif(currentDate) {
	var targetDay = new Date('November 20, 2012');
	return Math.round((targetDay - currentDate)/(1000*60*60*24));
}

var total = dayDif(new Date('September 01, 2012'));
var decTest = new Date('December 15, 2012');
var remaining = dayDif(new Date()); // Number of days from now until target date (1.1.13)
var percentage = (100 * (total - remaining)) / total

$(document).ready(function() {
	$('.bar').css('width', String(percentage) + '%');
});
