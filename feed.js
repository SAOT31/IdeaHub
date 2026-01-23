
// const userName = loggedUser.name;
// const userIdeas = loggedUser.ideas;

document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = sessionStorage.getItem('loggedUser');

    const userName = loggedUser.name;

    // if (!loggedUser) {
    //     window.location.href = 'index.html';
    // }

    const idea = document.createElement('article');
    idea.classList.add('idea-card');
    idea.innerHTML = `
        <div class="idea-header">
            <div class="avatar">V</div>
            <div>
            <h3>Vero</h3>
            <span>@verom</span>
            </div>
        </div>

        <p class="idea-text">
            Una app donde las personas puedan compartir ideas pequeñas que no quieren olvidar.
        </p>

        <div class="idea-actions">
            <button>❤️ 12</button>
            <button>💬 3</button>
        </div>
    `
});