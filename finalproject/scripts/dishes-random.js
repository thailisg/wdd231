const container = document.querySelector("#random-dishes");

async function loadRandomDishes() {
    try {
        const response = await fetch("./data/menu.json");
        const menu = await response.json();

        const maxDishes = Math.min(menu.length, 6);

        const shuffled = menu.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, maxDishes);

        selected.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const smallImg = item.img.replace(".webp", "-small.webp");
            const largeImg = item.img;

            card.innerHTML = `
                <h3>${item.name}</h3>
                <img 
                    src="${smallImg}" 
                    srcset="${smallImg} 200w, ${largeImg} 600w"
                    sizes="(max-width: 768px) 200px, 200px"
                    width="200" 
                    height="200"
                    alt="${item.name}"
                    ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                >
                <p>${item.ingredients.join(", ")}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading menu:", error);
    }
}

loadRandomDishes();