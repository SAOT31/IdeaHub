import { getIdeas } from "./utils.js";
import { renderFeed, renderAuthors } from "./feed.js";

const filters = document.querySelector(".filters");
const filterAuthor = document.getElementById("author");
const filterCategory = document.getElementById("category");
const filtersStatus = {
  author: "all",
  category: "all",
};

function applyFilters() {
  const ideasList = getIdeas();
  let filteredIdeas = ideasList;
  if (filtersStatus.category !== "all") {
    filteredIdeas = filteredIdeas.filter(
      (idea) => idea.category.toLowerCase() === filtersStatus.category,
    );
    renderAuthors(filtersStatus.category);
  }

  if (filtersStatus.author !== "all") {
    filteredIdeas = filteredIdeas.filter(
      (idea) => idea.creator === filtersStatus.author,
    );
  }
  renderFeed(filteredIdeas);
}

filters.addEventListener("change", (e) => {
  if (e.target.matches("#resetBtn")) {
    ((filtersStatus.author = "all"), (filtersStatus.category = "all"));
    filterAuthor.value = "";
    filterCategory.value = "";
    renderAuthors();
  }
  if (e.target.matches("#author")) {
    filtersStatus.author = filterAuthor.value;
  }
  if (e.target.matches("#category")) {
    filtersStatus.category = filterCategory.value;
  }

  applyFilters();
});
