const nameUser = document.getElementById("name")
const emailUser = document.getElementById("email")
const totIdeas = document.getElementById("totIdeas")
const addTaskBtn = document.getElementById("addTaskBtn")

      
addTaskBtn.addEventListener("click", () => {
    // Lógica para agregar una nueva tarea
    window.location.href = "idea-crud.html"; // Redirigir a la página de agregar tarea
});


//  Theme Change
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement; // <html>

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙 ";
  } else {
    html.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ ";
  }
})



document.addEventListener('DOMContentLoaded', () => {
  const users = JSON.parse(localStorage.getItem("Users")) || [];

  let userLog = 0
  const user = users[userLog];


  let userName = users[userLog].name
  let userEmail = users[userLog].email

  console.log(users[userLog].name)
  nameUser.innerHTML = `<p id="name"><strong>Name:</strong> ${userName} </p>`
  emailUser.innerHTML = `<p id="email"><strong>Email:</strong> ${userEmail}</p>`
  totIdeas.innerHTML = `<p id="totIdeas"><strong>Total Ideas:</strong><span> ${user.ideas.length}</span></p>`


  const container = document.getElementById("ideas-container");
  container.innerHTML = "";


  for (let j = 0; j < user.ideas.length; j++) {
    const idea = user.ideas[j];
    container.innerHTML += `
      <article class="idea-card">
        <header class="idea-header">
          <section class="idea-user">
            <div class="avatar">${user.name[userLog]}</div>
            <div>
              <h3>${user.name}</h3>
              <span>@${user.username}</span>
            </div>
          </section>

          <h4 class="idea-category">${idea.category}</h4>
        </header>

        <h3 class="idea-title">${idea.title}</h3>

        <p class="idea-text">
          ${idea.description}
        </p>

        <div class="idea-actions">
          <button>❤️ 12</button>
          <button>💬 3</button>
        </div>
      </article>
    `;

    
  }
  
})







// User Information
/*document.addEventListener('DOMContentLoaded', () => {
    console.log(users)

    let userName = users[0].name
    let userEmail = users[0].email

    console.log(users[0].name)
    nameUser.innerHTML = `<p id="name"><strong>Name:</strong> ${userName} </p>`
    emailUser.innerHTML = `<p id="email"><strong>Email:</strong> ${userEmail}</p>`
})`*/