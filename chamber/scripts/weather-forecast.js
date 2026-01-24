const tomorrowTemp = document.querySelector('#tomorrow-temp');
const dayAfterTemp = document.querySelector('#dayafter-temp');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-27.06&lon=-70.81&units=metric&appid=bd7cbfddabf906f39120984d7cb8e48f';

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {

    const tomorrow = data.list[8];
    const dayAfter = data.list[16];

    tomorrowTemp.textContent = `${Math.round(tomorrow.main.temp)}°C`;
    dayAfterTemp.textContent = `${Math.round(dayAfter.main.temp)}°C`;
}

apiFetchForecast();