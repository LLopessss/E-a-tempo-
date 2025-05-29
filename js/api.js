const apiKey = 'f2a6083291eff5a0418ba9d27c18c455';

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function getWeatherIcon(main) {
    switch (main) {
        case 'Clear': return 'fa-sun';
        case 'Clouds': return 'fa-cloud';
        case 'Rain': return 'fa-cloud-showers-heavy';
        case 'Drizzle': return 'fa-cloud-rain';
        case 'Thunderstorm': return 'fa-bolt';
        case 'Snow': return 'fa-snowflake';
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Fog':
        case 'Dust':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
            return 'fa-smog';
        default: return 'fa-cloud';
    }
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateCurrentWeather(data) {
    const location = document.querySelector('.location h2');
    const currentDate = document.getElementById('current-date');
    const temperature = document.querySelector('.temperature h3');
    const feelsLike = document.querySelector('.temperature p');
    const conditions = document.querySelectorAll('.conditions p');
    const weatherIcon = document.querySelector('.weather-icon i');

    const date = new Date();
    currentDate.textContent = date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    location.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    feelsLike.textContent = `Sensação térmica: ${Math.round(data.main.feels_like)}°C`;
    conditions[0].textContent = capitalizeFirst(data.weather[0].description);
    conditions[1].textContent = `Umidade: ${data.main.humidity}%`;

    const icon = getWeatherIcon(data.weather[0].main);
    weatherIcon.className = `fas ${icon}`;

    updateAlert(data);
}

function updateAlert(data) {
    const alertIcon = document.querySelector('.alert-icon i');
    const alertTitle = document.querySelector('.alert-text h4');
    const alertDescription = document.querySelector('.alert-text p');

    const main = data.weather[0].main;
    const temp = data.main.temp;

    let title = '';
    let description = '';
    let icon = '';

    if (main === 'Thunderstorm') {
        title = 'Alerta de Tempestade';
        description = 'Risco de raios e chuva forte. Evite áreas abertas.';
        icon = 'fa-bolt';
    } else if (main === 'Rain' || main === 'Drizzle') {
        title = 'Alerta de Chuva';
        description = 'Pode chover. Leve um guarda-chuva.';
        icon = 'fa-cloud-showers-heavy';
    } else if (main === 'Snow') {
        title = 'Alerta de Neve';
        description = 'Possibilidade de neve. Mantenha-se aquecido.';
        icon = 'fa-snowflake';
    } else if (main === 'Clear') {
        if (temp >= 30) {
            title = 'Muito Calor';
            description = 'Sol forte! Use protetor e hidrate-se.';
            icon = 'fa-sun';
        } else {
            title = 'Tempo Limpo';
            description = 'Dia ensolarado. Leve óculos de sol.';
            icon = 'fa-sun';
        }
    } else if (main === 'Clouds') {
        title = 'Nublado';
        description = temp < 20 ? 'Está frio. Leve uma blusa.' : 'Céu nublado, clima ameno.';
        icon = 'fa-cloud';
    } else if (['Mist', 'Smoke', 'Haze', 'Fog'].includes(main)) {
        title = 'Neblina';
        description = 'Visibilidade reduzida. Atenção ao dirigir.';
        icon = 'fa-smog';
    } else {
        title = 'Sem Alertas';
        description = temp < 18 ? 'Está frio. Leve uma blusa.' : 'Clima tranquilo no momento.';
        icon = 'fa-info-circle';
    }

    alertIcon.className = `fas ${icon}`;
    alertTitle.textContent = title;
    alertDescription.textContent = description;
}

async function searchCity() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Digite uma cidade!');
        return;
    }

    try {
        const weatherData = await fetchWeather(city);

        if (weatherData.cod === '404') {
            alert('Cidade não encontrada!');
            return;
        }

        updateCurrentWeather(weatherData);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        alert('Erro ao buscar dados. Verifique a conexão ou tente novamente.');
    }
}
