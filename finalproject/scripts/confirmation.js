const params = new URLSearchParams(window.location.search);

if (params.has("firstName")) {
    document.getElementById("firstName").textContent = params.get("firstName");
    document.getElementById("lastName").textContent = params.get("lastName");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("messageType").textContent = params.get("messageType");
    document.getElementById("message").textContent = params.get("message");
} else {
    document.querySelector(".confirmation").innerHTML =
        "<p>No form data found. Please submit the form first.</p>";
}

const count = localStorage.getItem("formSubmitCount") || 0;
const counterDisplay = document.createElement("p");
counterDisplay.textContent = `You have submitted the form ${count} times.`;
document.querySelector(".confirmation").appendChild(counterDisplay);