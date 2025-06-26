document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar button");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      const matches = title.includes(query) || description.includes(query);
      card.style.display = matches ? "block" : "none";
    });
  });

  // Optional: Press Enter to search
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
});
