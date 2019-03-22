window.addEventListener('load', () => {
	let latitude;
	let longitude;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			latitude = position.coords.latitude;
			longitude = position.coords.latitude;

			const api = `${BASE_URL}/${API_KEY}/${latitude},${longitude}`;
		});
	} else {
		//  display some error
	}
});
