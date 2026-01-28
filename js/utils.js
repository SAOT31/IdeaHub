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
    creator:'verom',
    name:'Vero',
    title:'My first idea',
    description:"An app where people can share small ideas they don't want to forget.",
    category:"Process",
    createdAt:getDate()},
    {id:2,
    creator:'anadev',
    name:'Ana',
    title:'What if?',
    description:"What if there was a social network just for crazy ideas without pressure?",
    category:"Research",
    createdAt:getDate()},
    {id:3,
    creator:'josesito',
    name:'Fose',
    title:'Who is the richest person in the world?',
    description:"The american people",
    category:"Research",
    createdAt:getDate()},
    {id:4,
    creator:'verom',
    name:'Vero',
    title:'This is how I find my startup ideas. How do you find yours?',
    description:"I often see questions around here about how to come up with startup ideas or SAAS concepts. I think it's one that a lot of people struggle with so just wanted to see if anyone is doing anything out of the ordinary to get their creative juices flowing. Usually my startup ideas come when I least expect it, as in when I'm not actually trying to think of an idea but I've found a few ways that help me at least get the balls in motion for coming up with ideas and they generally plant seeds for me to come up with ideas at a later stage.",
    category:"Process",
    createdAt:getDate()},
    {id:5,
    creator:'verom',
    name:'Vero',
    title:'This is how I find my startup ideas. How do you find yours?',
    description:"I often see questions around here about how to come up with startup ideas or SAAS concepts. I think it's one that a lot of people struggle with so just wanted to see if anyone is doing anything out of the ordinary to get their creative juices flowing. Usually my startup ideas come when I least expect it, as in when I'm not actually trying to think of an idea but I've found a few ways that help me at least get the balls in motion for coming up with ideas and they generally plant seeds for me to come up with ideas at a later stage.",
    category:"Process",
    createdAt:getDate()},
    {id:6,
    creator:'duviduvi',
    name:'Duvan',
    title:'My million dollar idea',
    description:"Una IA que me diga lo chimba que es Antony",
    category:"Process",
    createdAt:getDate()},
    {id:7,
    creator:'duviduvi',
    name:'Duvan',
    title:'My million dollar idea',
    description:"Una IA que me diga lo chimba que es Antony",
    category:"Process",
    createdAt:getDate()},
    {id:8,
    creator:'chocklitos',
    name:'Dieguito',
    title:'This is how I find my startup ideas. How do you find yours?',
    description:"I often see questions around here about how to come up with startup ideas or SAAS concepts. I think it's one that a lot of people struggle with so just wanted to see if anyone is doing anything out of the ordinary to get their creative juices flowing. Usually my startup ideas come when I least expect it, as in when I'm not actually trying to think of an idea but I've found a few ways that help me at least get the balls in motion for coming up with ideas and they generally plant seeds for me to come up with ideas at a later stage.",
    category:"Process",
    createdAt:getDate()},
];

localStorage.setItem('ideahub_ideas',JSON.stringify(ideas));
localStorage.setItem('loggedUser',JSON.stringify('verom'))
}