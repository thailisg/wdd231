const sitePlanData = [
    {
        title: "Site Name",
        description: "The restaurant's name is American, so the page name will be Americano. Regarding the logo, I will use a modified version of it, it is a seashell with the restaurant's name below it."
    },
    {
        title: "Site Purpose",
        description: "The purpose of the site is to give the restaurant more visibility (at least in Chile), providing a way for people from other places to learn about the restaurant and its dishes."
    },
    {
        title: "Scenarios",
        items: [
            "What kind of food does Americano offer?",
            "Where is the restaurant located?",
            "What are the opening hours?"
        ]
    },
    {
        title: "Color Scheme",
        items: [
            "Brown: Brown is the main color of the Americano",
            "White: it goes well with brown and is a color that is seen a lot inside the restaurant",
            "Beige: I will use this color for the button color and for highlighting; I chose beige because it contrasts well with the other two."
        ]
    },
    {
        title: "Typography",
        description: "The Roboto font will be used on the site because it is a legible and attractive font."
    },
    {
        title: "Wireframe",
        description: "The wireframes show the layout for both mobile and desktop views.",
        images: [
            {
                src: "images/wireframe-mobile.png",
                alt: "Mobile wireframe for Americano restaurant website"
            },
            {
                src: "images/wireframe-desktop.png",
                alt: "Desktop wireframe for Americano restaurant website"
            }
        ]
    }
];

const modal = document.querySelector("#siteplan-modal");
const buttons = document.querySelectorAll(".btn-modal");

function openModal(data) {
    let contentHTML = "";

    if (data.description) {
        contentHTML += `<p>${data.description}</p>`;
    }

    if (data.items) {
        contentHTML += `
            <ul>
                ${data.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    }

    if (data.images) {
        contentHTML += `
            <div class="wireframe-images">
                ${data.images.map(img => `
                    <figure>
                        <img 
                            src="${img.src}" 
                            alt="${img.alt}" 
                            loading="lazy"
                        >
                        <figcaption>${img.alt}</figcaption>
                    </figure>
                `).join("")}
            </div>
        `;
    }

    modal.innerHTML = `
        <form method="dialog">
            <button aria-label="Close">❌</button>
        </form>
        <h2>${data.title}</h2>
        ${contentHTML}
    `;

    modal.showModal();
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = parseInt(button.dataset.id, 10);
        openModal(sitePlanData[id]);
    });
});