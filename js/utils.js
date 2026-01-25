export function getDate(){
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'})
    return formattedDate
}

export function saveIdea() {
    const ideas = 
    [{id:1,
    creator:'@verom',
    name:'Vero',
    title:'My first idea',
    description:"An app where people can share small ideas they don't want to forget.",
    category:"Process",
    createdAt:getDate()},
    {id:2,
    creator:'@anadev',
    name:'Ana',
    title:'What if?',
    description:"What if there was a social network just for crazy ideas without pressure?",
    category:"Research",
    createdAt:getDate()},
    {id:3,
    creator:'@josesito',
    name:'Fose',
    title:'Who is the richest person in the world?',
    description:"The american people",
    category:"Research",
    createdAt:getDate()}];

localStorage.setItem('ideahub_ideas',JSON.stringify(ideas));
}