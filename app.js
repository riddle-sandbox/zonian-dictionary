const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    window.location.href = `detail.html?term=${encodeURIComponent(query)}&q=${encodeURIComponent(query)}`;
  });
}
