$(document).ready(function(){
	var city = 5;
	// When the select a city option is clicked, a list of cities will appear as a drop down menu 
		var city = $("#city-type").val();
	//This is the list for the drop down menu
		var myArray = ["NYC", "SF", "LA", "ATX", "SYD"];
	//This puts the array in the drop down menu	
		for(var i = 0; i < 5; i++){
			$("#city-type").append($("<option>" + myArray[i] + "</option>"))
		}
// 		})
	$('#city-type').change(function(){
		var city = $('#city-type').val();
		console.log (city);
		if (city ==='New York City' || city === 'NYC' || city === 'New York') {
			$('body').addClass('nyc');
			$('body').removeClass('sf la austin sydney');
		}	else if (city ==='San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').addClass('sf');
			$('body').removeClass('nyc la austin sydney');
		}	else if (city ==='Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').addClass('la');
			$('body').removeClass('nyc sf austin sydney');
		}	else if (city ==='Sydney' || city === 'SYD') {
			$('body').addClass('sydney');
			$('body').removeClass('nyc sf la austin');
		}	else if (city==='ATX' || city === 'Austin') {
			$('body').addClass('austin');
			$('body').removeClass('nyc sf la sydney');
		}
	});
})	