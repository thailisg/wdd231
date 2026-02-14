const menuContainer = document.querySelector("#menu-cards");

async function loadFullMenu() {
    try {
        const response = await fetch("./data/menu.json");
        const menu = await response.json();

        menuContainer.innerHTML = "";

        menu.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.ingredients.join(", ")}</p>
            `;

            menuContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading menu:", error);
        menuContainer.innerHTML = "<p>Failed to load menu.</p>";
    }
}

loadFullMenu();