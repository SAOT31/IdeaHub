const nameUser = document.getElementById("name")
const emailUser = document.getElementById("email")
const totIdeas = document.getElementById("totIdeas")


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

// List users

const users = [
  {
    "name": "pepito perez",
    "username":"peperez",
    "email":"pe_perez@gmail.com",
    "totalIdeas": "14", // Reemplazar por la variable que me almacena la longitud de la lista ideas
    "ideas":[
      {
        "id":"1234",
        "creator":this.username,
        "title":"QUIEN MONDA ES DORIAN?",
        "description":"Mondá pa tu jopo maricon",
        "category":"Urgente",
        "createAt": "hoy"

      }
    ]
  },
  {
    "name": "pepa pelaez",
    "username":"pepita",
    "email":"corozo@gmail.com",
    "totalIdeas": "41", // Reemplazar por la variable que me almacena la longitud de la lista ideas
    "ideas":[
      {
        "id":"4321",
        "creator":this.username,
        "title":"QUIEN MONDA ES DORIAN?",
        "description":"Mondá pa tu jopo maricon",
        "category":"Low key",
        "createAt": "mañana"

      }
    ]
  }
]








document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem("Users", JSON.stringify(users))

  let userName = users[1].name
  let userEmail = users[1].email
  let userTotalIdeas = users[1].totalIdeas

  console.log(users[0].name)
  nameUser.innerHTML = `<p id="name"><strong>Name:</strong> ${userName} </p>`
  emailUser.innerHTML = `<p id="email"><strong>Email:</strong> ${userEmail}</p>`
  totIdeas.innerHTML = `<p id="totIdeas"><strong>Total Ideas:</strong><span> ${userTotalIdeas}</span></p>`
})






// User Information
/*document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    console.log(users)

    let userName = users[0].name
    let userEmail = users[0].email

    console.log(users[0].name)
    nameUser.innerHTML = `<p id="name"><strong>Name:</strong> ${userName} </p>`
    emailUser.innerHTML = `<p id="email"><strong>Email:</strong> ${userEmail}</p>`
})`*/