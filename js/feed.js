import { getDate, saveIdea } from "./utils.js";

saveIdea();

const ideas = localStorage.getItem('ideahub_ideas');
const ideasList = JSON.parse(ideas)

console.log(ideasList)

function renderFeed(ideas) {
    const ideasFeed = document.getElementById('feed');
    
    ideas.forEach(element => {
    const output = document.createElement('article');
    output.classList.add('idea-card');
    output.dataset.id = element.id;

    output.innerHTML = `
        <header class="idea-header">
                <section>
                    <div class="avatar">${element.name[0]}</div>
                    <div>
                        <h3>${element.name}</h3>
                        <span>${element.creator}</span>
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
    })

}

renderFeed(ideasList)

// document.addEventListener("DOMContentLoaded", () => {


    // const loggedUser = sessionStorage.getItem('loggedUser');

    // const userName = loggedUser.name;

    // if (!loggedUser) {
    //     window.location.href = 'index.html';
    // }

    // const idea = document.createElement('article');
    // idea.classList.add('idea-card');
    // idea.innerHTML = `
    //     <div class="idea-header">
    //         <div class="avatar">V</div>
    //         <div>
    //         <h3>Vero</h3>
    //         <span>@verom</span>
    //         </div>
    //     </div>

    //     <p class="idea-text">
    //         Una app donde las personas puedan compartir ideas pequeñas que no quieren olvidar.
    //     </p>

    //     <div class="idea-actions">
    //         <button>❤️ 12</button>
    //         <button>💬 3</button>
    //     </div>
    // `
// });