import { getDate, saveIdea } from "./utils.js";

saveIdea();

const ideas = localStorage.getItem('ideahub_ideas');
const ideasList = JSON.parse(ideas)

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