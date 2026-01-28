import { getDate, saveIdea } from "./utils.js";

saveIdea();

const ideas = localStorage.getItem("ideahub_ideas");
const ideasList = JSON.parse(ideas);
const user = localStorage.getItem("loggedUser");
const currentUser = JSON.parse(user);
const themeToggle = document.getElementById("themeToggle");
const feed = document.getElementById("feed");
let currentEditId = null;

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

export function renderFeed(ideas) {
  const ideasFeed = document.getElementById("feed");
  ideasFeed.innerHTML = "";

  ideas.forEach((element) => {
    const output = document.createElement("article");
    output.classList.add("idea-card");
    output.dataset.id = element.id;

    output.innerHTML = `
            <header class="idea-header">
                    <section>
                        <div class="avatar">${element.name[0]}</div>
                        <div>
                            <h3>${element.name}</h3>
                            <span>@${element.creator}</span>
                        </div>
                    </section>
                    <h4 class="idea-category">${element.category}</h4>
                </header>
                <h3 class="idea-title">${element.title}</h3>
                <p class="idea-text">
                    ${element.description}
                </p>
                <div class="idea-actions">
                    <button>❤️ 12</button>
                    <button>💬 3</button>
                </div>`;

    ideasFeed.appendChild(output);

    if (currentUser === element.creator) {
      const buttonSpace = output.querySelector(".idea-actions");
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");
      btnEdit.classList.add("edit-btn");
      btnDelete.classList.add("delete-btn");
      btnEdit.innerHTML = `Edit<img src="assets/edit.svg">`;
      btnDelete.innerHTML = `Delete<img src="assets/trash.svg">`;

      buttonSpace.appendChild(btnEdit);
      buttonSpace.appendChild(btnDelete);
    }
  });
}

export function renderAuthors(categoryFilter) {
  const authorSelect = document.getElementById("author");
  const selectedAuthor = authorSelect.value;

  authorSelect.innerHTML = `
    <option value="" selected disabled>Author</option>
  `;
  const authorsSet = new Set();

  ideasList.forEach((idea) => {
    if (idea.category.toLowerCase() == categoryFilter || !categoryFilter) {
      authorsSet.add(idea.creator);
    }
  });

  authorsSet.forEach((author) => {
    const authorOption = document.createElement("option");
    authorOption.value = author;
    authorOption.textContent = author;
    authorSelect.appendChild(authorOption);

    if (author === selectedAuthor) {
      authorOption.selected = true;
    }
  });
}

function editIdea(idea, ideaId) {
  const modal = document.getElementById("editModal");
  modal.style.display = "block";
  currentEditId = ideaId;

  const editTitle = document.getElementById("edit-title");
  const editDescription = document.getElementById("edit-description");
  const editCategory = document.getElementById("edit-category");
  const oldTitle = idea.querySelector(".idea-title").innerHTML;
  const oldDescription = idea.querySelector(".idea-text").innerHTML.trim();
  const oldCategory = idea.querySelector(".idea-category").innerHTML;
  editTitle.value = oldTitle;
  editDescription.value = oldDescription;
  editCategory.value = oldCategory.toLowerCase();

  const span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

const form = document.getElementById("edit-form");
form.addEventListener("submit", (e) => {
  const modal = document.getElementById("editModal");
  e.preventDefault();
  const editedIdea = new FormData(form);
  saveEditedIdea(editedIdea, currentEditId);
  modal.style.display = "none";
});

function saveEditedIdea(inputEdit, id) {
  const idea = ideasList.find((idea) => idea.id === id);

  for (const [key, value] of inputEdit) {
    idea[key] = value;
    if (key == "category") {
      idea[key] = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  localStorage.setItem("ideahub_ideas", JSON.stringify(ideasList));
  renderFeed(ideasList);
}

function deleteIdea(ideaCard, ideaId) {
  const index = ideasList.findIndex((idea) => idea.id === ideaId);

  if (index !== -1) {
    ideasList.splice(index, 1);
  }

  ideaCard.remove();
  localStorage.setItem("ideahub_ideas", JSON.stringify(ideasList));
  renderAuthors();
}

renderFeed(ideasList);
renderAuthors();

feed.addEventListener("click", (e) => {
  const card = e.target.closest(".idea-card");
  const ideaId = Number(card.dataset.id);
  if (e.target.matches(".edit-btn")) {
    editIdea(card, ideaId);
  }

  if (e.target.matches(".delete-btn")) {
    deleteIdea(card, ideaId);
  }
});
