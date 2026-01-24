const spotlight = document.getElementById('spotlight');
const membersData = 'data/members.json';

async function getSpotlightMembers() {
    try {
        const response = await fetch(membersData);
        const data = await response.json();
        const qualified = data.members.filter(
            member => member.membershipLevel >= 2
        );
        const shuffled = qualified.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        displaySpotlight(selected);
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlight(members) {
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        const container = document.createElement('div');
        container.classList.add('card-container');

        const image = document.createElement('img');
        image.src = member.image;
        image.alt = `Logo of ${member.companyName}`;
        image.loading = "lazy";

        const info = document.createElement('div');
        info.classList.add('card-info');

        const name = document.createElement('h3');
        name.textContent = member.companyName;

        const website = document.createElement('a');
        website.href = member.companyWebsite;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const phone = document.createElement('p');
        phone.textContent = member.companyPhone;

        const address = document.createElement('p');
        address.textContent = member.companyAddress;

        const level = document.createElement('p');
        if (member.membershipLevel === 3) {
            level.textContent = "Gold Member";
        } else {
            level.textContent = "Silver Member";
        }

        info.appendChild(phone);
        info.appendChild(address);
        info.appendChild(level);

        info.appendChild(name);
        info.appendChild(website);

        container.appendChild(image);
        container.appendChild(info);
        card.appendChild(container);

        spotlight.appendChild(card);
    });
}

getSpotlightMembers();