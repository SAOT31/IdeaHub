// List users

const users = [
  {
    name: "pepito perez",
    username:"peperez",
    email:"pe_perez@gmail.com",
    ideas:[
      {
        "id":"1234",
        "title":"QUIEN MONDA ES DORIAN?",
        "description":"Mondá pa tu jopo maricon",
        "category":"Urgente",
        "createAt": "hoy"

      }
    ],
  },
  {
    name: "pepa pelaez",
    username:"pepita",
    email:"corozo@gmail.com",
    ideas:[
      {
        "id":"4321",
        "title":"QUIEN MONDA ES DORIAN?",
        "description":"Mondá pa tu jopo maricon",
        "category":"Low key",
        "createAt": "mañana"

      }
    ]
  }
]

export function saveLocal() {
    localStorage.setItem("Users", JSON.stringify(users))
}


