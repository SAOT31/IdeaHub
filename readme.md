# IdeaHub – ideas.js Overview

A tiny, human-friendly CRUD layer for ideas, powered by `localStorage` and a simple session. It’s built with vanilla JS and wires directly to the form in `idea-crud.html`.

## What it does
- **Session & authoring:** Reads a session from `localStorage` (`ideahub_session`). If none exists, it seeds a demo user so you can test immediately. Each idea stores `authorId` so only its author can edit/delete.
- **Storage:** Saves all ideas under `ideahub_ideas` in `localStorage`.
- **CRUD API:** Exposes helpers: `getIdeas()`, `saveIdeas()`, `getIdeaById()`, `getIdeasByAuthor()`, `createIdea()`, `updateIdea()`, `deleteIdea()`, `isOwner()`, `countIdeasByAuthor()`.
- **Form hookup:** Listens to the form submit in `idea-crud.html`, creates an idea, shows a status message, and resets the form on success.

## Quick start
1. Open `idea-crud.html` in a browser.
2. Fill Title, Description, and Category, then click Save.
3. Check your browser `localStorage` → you’ll see `ideahub_ideas` (ideas list) and `ideahub_session` (current user).

## Use your own user (optional)
Set a custom session before creating ideas (DevTools Console):

```js
localStorage.setItem('ideahub_session', JSON.stringify({
	loggedUser: { id: 'my-user', email: 'me@example.com', name: 'Me' }
}));
```

Ideas created after this will belong to that user, and only that user can edit/delete them (for Now).

author: Carlos Andres Monterrosa Gallego

## En Español
Una guía breve y humana sobre lo que hace `ideas.js` y cómo usarlo.

### Qué hace
- **Sesión y autoría:** Lee la sesión desde `localStorage` (`ideahub_session`). Si no existe, crea un usuario demo para probar de inmediato. Cada idea guarda `authorId`, así solo su autor puede editar/eliminar.
- **Almacenamiento:** Guarda todas las ideas en `localStorage` bajo `ideahub_ideas`.
- **API CRUD:** Incluye `getIdeas()`, `saveIdeas()`, `getIdeaById()`, `getIdeasByAuthor()`, `createIdea()`, `updateIdea()`, `deleteIdea()`, `isOwner()`, `countIdeasByAuthor()`.
- **Integración con formulario:** Escucha el submit del formulario en `idea-crud.html`, crea la idea, muestra un mensaje y resetea el formulario si todo salió bien.

### Inicio rápido
1. Abre `idea-crud.html` en tu navegador.
2. Completa Título, Descripción y Categoría, y pulsa Save.
3. Revisa `localStorage` → verás `ideahub_ideas` (lista de ideas) y `ideahub_session` (usuario actual).

### Usar tu propio usuario (opcional)
Configura una sesión personalizada antes de crear ideas (Consola de DevTools):

```js
localStorage.setItem('ideahub_session', JSON.stringify({
	loggedUser: { id: 'mi-usuario', email: 'yo@ejemplo.com', name: 'Yo' }
}));
```

Las ideas que crees después pertenecerán a ese usuario y solo ese usuario podrá editarlas/eliminarlas (por ahora).

author: Carlos Andres Monterrosa Gallego