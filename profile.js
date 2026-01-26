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