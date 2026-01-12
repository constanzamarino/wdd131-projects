
const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

currentYearElement.textContent = currentYear;
lastModifiedElement.textContent = lastModified.toLocaleDateString("en-EN");

const time = document.getElementById("time");
setInterval(function(){
    const now = new Date();
    time.textContent =
    now.getHours() + ":" +
    now.getMinutes() + ":" +
    now.getSeconds()
}, 1000);