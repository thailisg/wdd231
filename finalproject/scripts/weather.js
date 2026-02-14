const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const tempMin = document.querySelector('#temp-min');
const tempMax = document.querySelector('#temp-max');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-27.06&lon=-70.81&units=metric&appid=bd7cbfddabf906f39120984d7cb8e48f';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
};

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    tempMin.innerHTML = `${data.main.temp_min}&deg;C`;
    tempMax.innerHTML = `${data.main.temp_max}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();