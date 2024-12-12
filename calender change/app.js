document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    // Get current date
    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Update the UI
    dateElement.textContent = now.getDate().toString().padStart(2, "0");
    dayElement.textContent = dayNames[now.getDay()].toLowerCase();
    monthElement.textContent = monthNames[now.getMonth()].toLowerCase();
    yearElement.textContent = now.getFullYear();
});
