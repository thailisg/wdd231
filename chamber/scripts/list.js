const membersCaldera = document.getElementById('members');
const membersData = 'data/members.json';
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

gridBtn.addEventListener('click', () => {
    membersCaldera.classList.add('grid');
    membersCaldera.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    membersCaldera.classList.add('list');
    membersCaldera.classList.remove('grid');
});

async function getMembersData() {
    try {
        const response = await fetch(membersData);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembersData();

function displayMembers(members) {
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

        const name = document.createElement('h2');
        name.textContent = member.companyName;

        const details = document.createElement('div');
        details.classList.add('details');

        const address = document.createElement('p');
        address.textContent = member.companyAddress;

        const phone = document.createElement('p');
        phone.textContent = member.companyPhone;

        const website = document.createElement('a');
        website.href = member.companyWebsite;
        website.textContent = "Visit Website";
        website.target = "_blank";

        details.appendChild(address);
        details.appendChild(phone);
        details.appendChild(website);

        info.appendChild(name);
        info.appendChild(details);

        container.appendChild(image);
        container.appendChild(info);

        card.appendChild(container);

        if (member.membershipLevel === 3) {
            card.classList.add('premium');
        }

        membersCaldera.appendChild(card);
    });
}
