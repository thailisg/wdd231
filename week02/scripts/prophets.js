const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetsData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const dateBirth = document.createElement('p');
        const placeBirth = document.createElement('p');
        const portrait = document.createElement('img');


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateBirth.textContent = `Date of birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portreit of ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
};