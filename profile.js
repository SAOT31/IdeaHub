const nameUser = document.getElementById("name")
const emailUser = document.getElementById("email")


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
});

// User Information
document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    console.log(users)

    let userName = users[0].name
    let userEmail = users[0].email

    console.log(users[0].name)
    nameUser.innerHTML = `<p id="name"><strong>Name:</strong> ${userName} </p>`
    emailUser.innerHTML = `<p id="email"><strong>Email:</strong> ${userEmail}</p>`
})