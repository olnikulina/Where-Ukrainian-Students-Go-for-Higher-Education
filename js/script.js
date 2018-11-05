

var map = new L.Map('mapid').setView([48.5, 31.3], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);

d3.json("Json/oblast.json")
  .then(function(data){
    console.log(data)
    L.geoJSON(data).addTo(map);
  });



// style.addTo(map);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

//L.geoJson(ukraine_regions).addTo(map);

 // function setColor(population) {
 // 	var population_num = parseInt(population)

 // 	if (population_num > 150000) {
 // 		return '#005824';
 // 	} else if (population_num > 125000) {
 // 		return '#238b45';
 // 	} else if (population_num > 100000) {
 // 		return '#41ae76';
 // 	} else if (population_num > 75000) {
 // 		return '#66c2a4';
 // 	} else if (population_num > 50000) {
 // 		return '#99d8c9';
 // 	} else if (population_num > 25000) {
 // 		return '#ccece6';
 // 	} else {
 // 		return '#edf8fb';
 // 	}
 // }