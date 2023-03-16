const form = document.querySelector('form');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const resultContainer = document.getElementById('result');
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById('co');
const no2Result = document.getElementById('no2');
const o3Result = document.getElementById('o3');
const pm25Result = document.getElementById('pm25');
const pm10Result = document.getElementById('pm10');
const so2Result = document.getElementById('so2');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '64d34e3ca2msha9e256766fd0ee0p133756jsnb0cc8cf41202',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0]);
            let readings = data.data[0];

            aqiResult.textContent = readings.aqi.toFixed(2);
            coResult.textContent = readings.co.toFixed(2);
            no2Result.textContent = readings.no2.toFixed(2);
            o3Result.textContent = readings.o3.toFixed(2);
            pm25Result.textContent = readings.pm25.toFixed(2);
            pm10Result.textContent = readings.pm10.toFixed(2);
            so2Result.textContent = readings.so2.toFixed(2);
            resultContainer.style.display = 'flex';
        })
        .catch(err => console.error(err));
});
