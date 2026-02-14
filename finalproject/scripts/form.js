const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        messageType: form.messageType.value,
        message: form.message.value
    };

    let count = parseInt(localStorage.getItem("formSubmitCount")) || 0;
    count++;
    localStorage.setItem("formSubmitCount", count);

    const params = new URLSearchParams(formData).toString();

    window.location.href = `confirmation-page.html?${params}`;
});