const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];


let UsersCardId = document.querySelectorAll('[data-user-id]')
// console.log(UsersCardId);
console.log(UsersCardId.dataset.userId)
// console.log(cardId3,cardId1,cardId2,cardId4);
// console.log(cardId1.dataset.userId)
// Your table contains user objects, each with a unique ID.
// Your static HTML Cards have a corresponding data-user-id attribute.
//  Browse through your array of objects, and for each object,
//  find the specific HTML Card by its
//     data attribute (querySelector('[data-user-id="..."]')),
//     and then fill it in.

// let cardId = UsersCardId.dataset.userId
// console.log(cardId);

function usersId() {
  UsersCardId.forEach((user => {
    if (user.id === id3) {
      console.log(id3);
      
    }
  }))
}
usersId()