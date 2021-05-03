const myHeading = document.getElementById("headingH1");
myHeading.textContent = "Welcome to My World!";

function searchFunction() {
    const searchTerm = document.getElementById("searchInput");
    console.log("We are searching for: " + searchTerm.value);
}
