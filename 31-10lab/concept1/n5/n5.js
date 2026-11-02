const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];


let cardsId = document.querySelectorAll('[data-user-id]')
// console.log(cardsId);


function browsObjIds() {
  let objId = users.find((user) => user.id === 3)
  console.log(objId);
  
}

