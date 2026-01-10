/*----------current year------------*/
const currentyear = document.querySelector("#currentyear");

const today = new Date();

const yearUS = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(today);

currentyear.textContent = `©️ ${yearUS}`;

/*------------Last modified-----------*/

document.getElementById("lastModified").innerHTML = document.lastModified;