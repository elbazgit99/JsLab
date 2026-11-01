// import {user} from "../n2/n2.js";
 const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

let userCard = document.querySelector('.user-card')

let cardName = userCard.querySelector('.card-title')

let cardEmail = userCard.querySelector('.card-email')
let cardRole = userCard.querySelector('.card-role')

cardName.textContent = user.nom
cardEmail.textContent = user.email
cardRole.textContent = user.role
// let parent = cardName.parentElement
// console.log(parent);



// console.log(cardName);

