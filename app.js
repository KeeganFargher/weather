window.addEventListener('load', () => {
	let latitude;
	let longitude;

	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;

			const api = `${PROXY}/${BASE_URL}/${API_KEY}/${latitude},${longitude}`;

			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data);
					const { temperature, summary } = data.currently;

					//  Setting DOM elements
					temperatureDegree.textContent = temperature;
				});
		});
	} else {
		//  display some error
	}
});
