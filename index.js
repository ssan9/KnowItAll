// const API_URL = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrprop=snippet&prop=info&inprop=url&format=json"
const API_URL = "https://en.wikipedia.org/w/api.php?action=opensearch"

function getDataFromApi(searchTerm, callback) {
	query = {
		search: searchTerm
	}

	$.ajax({
		// url: API_URL+"?"+$.param(query),
		url: API_URL,
		data: query,
		dataType: 'jsonp',
		success: callback,
		error: function error() {
			console.log("error");
		}
	});
}

function displaySearchData(data) {
	// debugger;
	console.log(data);
	// console.log(data[3][0]);
	$('.js-results').html(`<a class="url" href="${data[3][0]}" target="_blank">${data[0]} </a>`);
}

function watchSubmit() {
	$(".greeting").submit(function(event) {
		event.preventDefault();
		const query = $("#js-title").val();
		$("#js-title").val("");
		// console.log(query);
		getDataFromApi(query, displaySearchData);
	});
}

$(watchSubmit);
	
