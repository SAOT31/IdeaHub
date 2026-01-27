import { getDate, saveIdea } from "./utils.js";

saveIdea();

const ideas = localStorage.getItem('ideahub_ideas');
const ideasList = JSON.parse(ideas);
const user = localStorage.getItem('loggedUser');
const currentUser = JSON.parse(user)
const themeToggle = document.getElementById('themeToggle');
const feed = document.getElementById('feed')

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

function renderFeed(ideas) {
    const ideasFeed = document.getElementById('feed');
    const authorsSet = new Set();
    const authorSelect = document.getElementById('author')

    ideas.forEach(element => {
        const output = document.createElement('article');
        output.classList.add('idea-card');
        output.dataset.id = element.id;
        authorsSet.add(element.creator)

        output.innerHTML = `
            <header class="idea-header">
                    <section>
                        <div class="avatar">${element.name[0]}</div>
                        <div>
                            <h3>${element.name}</h3>
                            <span>@${element.creator}</span>
                        </div>
                    </section>
                    <h4>${element.category}</h4>
                </header>
                <h3>${element.title}</h3>
                <p class="idea-text">
                    ${element.description}
                </p>
                <div class="idea-actions">
                    <button>❤️ 12</button>
                    <button>💬 3</button>
                </div>`

        ideasFeed.appendChild(output)

        if (currentUser === element.creator) {
            const buttonSpace = output.querySelector('.idea-actions');
            const btn = document.createElement('button');
            btn.classList.add('edit-btn');
            btn.innerHTML=`Edit<img src="assets/edit.svg">`

            buttonSpace.appendChild(btn)
        }     
    })
    authorsSet.forEach(element => {
        const authorOption = document.createElement('option');
        authorOption.innerHTML = `<option value="${element}">${element}</option>`
        authorSelect.appendChild(authorOption)
    });
}

renderFeed(ideasList)

feed.addEventListener('click', (e) =>{
    console.log('entra')
    const modal = document.getElementById('editModal')
    if (e.target.closest('.edit-btn')) {
        modal.style.display = "block";
        console.log('boton')
        const card = e.target.closest('.idea-card');
        const id = card.dataset.id;
        console.log(card)
    }
})

const editBtn = document.querySelectorAll('.edit-btn')
console.log(editBtn)

