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
					updateWeather(data);
				});
		});
	} else {
		//  display some error
	}

	function updateWeather(data) {
		const { temperature, summary, icon } = data.currently;

		//  Setting DOM elements
		temperatureDegree.textContent = Math.round((temperature - 32) * (5 / 9)); //  We want celcious tnx
		temperatureDescription.textContent = summary;
		locationTimezone.textContent = data.timezone;
		setIcons(icon, document.querySelector('.icon'));
	}

	function setIcons(icon, iconId) {
		const skycons = new Skycons({ color: 'white' });
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.play();
		return skycons.set(iconId, Skycons[currentIcon]);
	}
});
