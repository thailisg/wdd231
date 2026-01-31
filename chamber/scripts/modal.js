document.getElementById("timestamp").value = new Date().toISOString();

const membershipLevels = [
    {
        membershipLvl: 0,
        title: "NP Membership",
        description: "For non-profit organizations, no fee",
        benefits: [
            "No membership fee",
            "Access to basic events",
            "Networking opportunities"
        ]
    },
    {
        membershipLvl: 1,
        title: "Bronze Membership",
        description: "Basic paid membership",
        benefits: [
            "All NP benefits",
            "Training sessions",
            "Advertising opportunities"
        ]
    },
    {
        membershipLvl: 2,
        title: "Silver Membership",
        description: "Intermediate membership with more perks",
        benefits: [
            "All Bronze benefits",
            "Premium advertising (spotlight)",
            "Event discounts"
        ]
    },
    {
        membershipLvl: 3,
        title: "Gold Membership",
        description: "VIP membership with full benefits",
        benefits: [
            "All Silver benefits",
            "VIP events",
            "Extra discounts"
        ]
    }
];

function displayMembershipModal(level) {
    const modal = document.querySelector("#member-modal");

    modal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${level.title}</h2>
        <p>${level.description}</p>
        <h3>Benefits:</h3>
        <ul>
            ${level.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <p><a href="#">Click here for more details</a></p>
    `;

    modal.showModal();

    const closeBtn = modal.querySelector("#closeModal");
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}

const buttons = document.querySelectorAll(".btn-modal");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const levelId = parseInt(btn.dataset.id, 10);
        displayMembershipModal(membershipLevels[levelId]);
    });
});