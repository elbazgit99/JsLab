const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];

let grid = document.querySelector('.grid')
let usersCard = grid.querySelectorAll(".user-card")

let cardsTitle = document.querySelectorAll('.card-title')
let cardsEmeil = document.querySelectorAll('.card-email')
let cardsRole = document.querySelectorAll('.card-role')

function queryElements() {
  let t = 0
  cardsTitle.forEach((title)=>{
    title.textContent = users[t].nom
    t++
    
  })
  
  for (let e = 0; e < cardsEmeil.length; e++) {
    cardsEmeil[e].textContent = users[e].email
  }

  let r = 0
  for(let role of cardsRole){
    role.textContent = users[r].role
    // console.log(r);
    r++
  }
}
queryElements()

// It logs the filtered result, which includes only the object with name: 'Karim Benali'.
// const isMatche = users.filter((user) => user.nom === 'Karim Benali');
// console.log(isMatche);