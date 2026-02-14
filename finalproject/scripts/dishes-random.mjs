const container = document.querySelector("#random-dishes");

async function loadRandomDishes() {
    try {
        const response = await fetch("./data/menu.json");
        const menu = await response.json();

        const maxDishes = Math.min(menu.length, 6);

        const shuffled = menu.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, maxDishes);

        selected.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.img}" alt="${item.name}">
                <p>${item.ingredients.join(", ")}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

loadRandomDishes();