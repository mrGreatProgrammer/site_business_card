const timeEL = document.querySelector("time");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

timeEL.textContent = currentYear;
