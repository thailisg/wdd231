import { places } from "../data/places.mjs";

const container = document.querySelector("#places");

places.forEach(place => {
    const card = document.createElement("article");
    card.classList.add("place-card");

    //title
    const title = document.createElement("h2");
    title.textContent = place.name;

    //img
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = place.photo_src;
    img.alt = place.name;
    img.loading = "lazy";
    figure.appendChild(img);

    //address
    const address = document.createElement("address");
    address.textContent = place.address;

    //description
    const description = document.createElement("p");
    description.textContent = place.description;

    //learn more button
    const button = document.createElement("button");
    button.textContent = "Learn more";

    //card
    card.append(title, figure, address, description, button);
    container.appendChild(card);
});