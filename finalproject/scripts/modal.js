const modal = document.getElementById("recommendation-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = modal.querySelector(".close");

const recommendations = {
    cold: {
        title: "For Cold",
        text: "We recommend our seafood Skilled, perfect for these climates because it's so warm"
    },
    heat: {
        title: "For Heat",
        text: "For hot days, try our Caesar salad, light and delicious"
    },
    whim: {
        title: "For a Craving",
        text: "If you have a craving, don't miss our Cheese and Bacon Fries, irresistible at any time"
    }
};

document.querySelectorAll(".recommendation button").forEach(btn => {
    btn.addEventListener("click", () => {
        const rec = recommendations[btn.id];
        modalTitle.textContent = rec.title;
        modalText.textContent = rec.text;
        modal.classList.add("show");
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
    }
});