const menuContainer = document.querySelector("#menu-cards");

async function loadFullMenu() {
    try {
        const response = await fetch("./data/menu.json");
        const menu = await response.json();

        menuContainer.innerHTML = "";

        menu.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const smallImg = item.img.replace(".webp", "-small.webp");
            const largeImg = item.img;
            card.innerHTML = `
                <img 
                    src="${smallImg}" 
                    srcset="${smallImg} 200w, ${largeImg} 600w"
                    sizes="(max-width: 768px) 200px, 200px"
                    width="200" 
                    height="200"
                    alt="${item.name}"
                    ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                >
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