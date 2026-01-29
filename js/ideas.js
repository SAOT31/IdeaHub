

const IDEAS_KEY = 'ideahub_ideas';
const SESSION_KEY = 'ideahub_session';


function seedDemoSession() {
    const existing = localStorage.getItem(SESSION_KEY);
    if (existing) {
        return JSON.parse(existing);
    }
    const sessionData = { loggedUser: DEFAULT_USER };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    return sessionData;
}

// Genera un ID unico para cada idea
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Obtiene todas las ideas del localStorage
export function getIdeas() {
    const data = localStorage.getItem(IDEAS_KEY);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

// Guarda el array de ideas en localStorage
export function saveIdeas(ideasList) {
    localStorage.setItem(IDEAS_KEY, JSON.stringify(ideasList));
}

// Obtiene una idea por su ID
export function getIdeaById(ideaId) {
    const ideasList = getIdeas();
    const idea = ideasList.find(item => item.id === ideaId);
    return idea || null;
}

// Obtiene todas las ideas de un autor especifico
export function getIdeasByAuthor(authorId) {
    const ideasList = getIdeas();
    const userIdeas = ideasList.filter(item => item.authorId === authorId);
    return userIdeas;
}

// Obtiene el usuario actual de la sesion
function getCurrentUser() {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
        const sessionData = JSON.parse(session);
        return sessionData.loggedUser || null;
    }
    // Si no hay sesion, sembramos el usuario demo para que las funciones trabajen
    const sessionData = seedDemoSession();
    return sessionData.loggedUser || null;
}

// Crea una nueva idea y la guarda
export function createIdea(title, description, category) {
    const currentUser = getCurrentUser();
    
    // Verificamos que haya un usuario logueado
    if (!currentUser) {
        return { success: false, message: 'You must be logged in to create an idea' };
    }
    
    // Validamos que los campos no esten vacios
    if (!title || !title.trim()) {
        return { success: false, message: 'Title is required' };
    }
    
    if (!description || !description.trim()) {
        return { success: false, message: 'Description is required' };
    }
    
    if (!category) {
        return { success: false, message: 'Category is required' };
    }
    
    // Categorias permitidas segun los requisitos
    const validCategories = ['product', 'improvement', 'experiment', 'other'];
    if (!validCategories.includes(category)) {
        return { success: false, message: 'Invalid category' };
    }
    
    // Creamos el objeto de la idea
    const newIdea = {
        id: generateId(),
        title: title.trim(),
        description: description.trim(),
        category: category,
        authorId: currentUser.id || currentUser.email,
        createdAt: new Date().toISOString()
    };
    
    // Obtenemos las ideas existentes y agregamos la nueva
    const ideasList = getIdeas();
    ideasList.push(newIdea);
    saveIdeas(ideasList);
    
    return { success: true, message: 'Idea created successfully', idea: newIdea };
}

// Actualiza una idea existente (solo si el usuario es el autor)
export function updateIdea(ideaId, newTitle, newDescription, newCategory) {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        return { success: false, message: 'You must be logged in to edit an idea' };
    }
    
    const ideasList = getIdeas();
    const ideaIndex = ideasList.findIndex(item => item.id === ideaId);
    
    // Verificamos que la idea exista
    if (ideaIndex === -1) {
        return { success: false, message: 'Idea not found' };
    }
    
    const idea = ideasList[ideaIndex];
    
    // Verificamos que el usuario sea el autor de la idea
    const userId = currentUser.id || currentUser.email;
    if (idea.authorId !== userId) {
        return { success: false, message: 'You can only edit your own ideas' };
    }
    
    // Validaciones de los campos
    if (!newTitle || !newTitle.trim()) {
        return { success: false, message: 'Title is required' };
    }
    
    if (!newDescription || !newDescription.trim()) {
        return { success: false, message: 'Description is required' };
    }
    
    const validCategories = ['product', 'improvement', 'experiment', 'other'];
    if (newCategory && !validCategories.includes(newCategory)) {
        return { success: false, message: 'Invalid category' };
    }
    
    // Actualizamos los campos de la idea
    ideasList[ideaIndex].title = newTitle.trim();
    ideasList[ideaIndex].description = newDescription.trim();
    if (newCategory) {
        ideasList[ideaIndex].category = newCategory;
    }
    
    saveIdeas(ideasList);
    
    return { success: true, message: 'Idea updated successfully', idea: ideasList[ideaIndex] };
}

// Elimina una idea (solo si el usuario es el autor)
export function deleteIdea(ideaId) {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        return { success: false, message: 'You must be logged in to delete an idea' };
    }
    
    const ideasList = getIdeas();
    const ideaIndex = ideasList.findIndex(item => item.id === ideaId);
    
    if (ideaIndex === -1) {
        return { success: false, message: 'Idea not found' };
    }
    
    const idea = ideasList[ideaIndex];
    
    // Solo el autor puede eliminar su idea
    const userId = currentUser.id || currentUser.email;
    if (idea.authorId !== userId) {
        return { success: false, message: 'You can only delete your own ideas' };
    }
    
    // Eliminamos la idea del array
    ideasList.splice(ideaIndex, 1);
    saveIdeas(ideasList);
    
    return { success: true, message: 'Idea deleted successfully' };
}

// Verifica si el usuario actual es el autor de una idea
export function isOwner(ideaId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return false;
    }
    
    const idea = getIdeaById(ideaId);
    if (!idea) {
        return false;
    }
    
    const userId = currentUser.id || currentUser.email;
    return idea.authorId === userId;
}

// Cuenta el total de ideas de un autor
export function countIdeasByAuthor(authorId) {
    const userIdeas = getIdeasByAuthor(authorId);
    return userIdeas.length;
}


// Enlaza el formulario  para crear ideas y guardar en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ideaForm');
    if (!form) return;

    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const categorySelect = document.getElementById('categorySelect');
    const statusMsg = document.getElementById('statusMsg');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = titleInput?.value || '';
        const description = descriptionInput?.value || '';
        const category = categorySelect?.value || '';

        const result = createIdea(title, description, category);
        if (statusMsg) {
            statusMsg.textContent = result.message;
            statusMsg.style.color = result.success ? 'green' : 'red';
        }

        if (result.success) {
            form.reset();
            if (categorySelect) categorySelect.value = 'product';
        }
    });
});


localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
        loggedUser: {
            id: 'carlos',
            email: 'carlos@gmail.com'
        }
    })
);