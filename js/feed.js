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

function renderFeed(ideas) {
  const ideasFeed = document.getElementById("feed");
  ideasFeed.innerHTML = "";
  const authorsSet = new Set();
  const authorSelect = document.getElementById("author");

  ideas.forEach((element) => {
    const output = document.createElement("article");
    output.classList.add("idea-card");
    output.dataset.id = element.id;
    authorsSet.add(element.creator);

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
      const btn = document.createElement("button");
      btn.classList.add("edit-btn");
      btn.innerHTML = `Edit<img src="assets/edit.svg">`;

      buttonSpace.appendChild(btn);
    }
  });
  authorsSet.forEach((element) => {
    const authorOption = document.createElement("option");
    authorOption.innerHTML = `<option value="${element}">${element}</option>`;
    authorSelect.appendChild(authorOption);
  });
}

function editIdea(idea, ideaId) {
  const modal = document.getElementById("editModal");
  modal.style.display = "block";
  currentEditId=ideaId;

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

renderFeed(ideasList);

feed.addEventListener("click", (e) => {
  if (e.target.matches(".edit-btn")) {
    const card = e.target.closest(".idea-card");
    const ideaId = Number(card.dataset.id);
    editIdea(card, ideaId);
  }
});
