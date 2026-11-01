 const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
// export {user}
let userName = document.querySelector('#user-name')
let userEmail = document.querySelector('#user-email')
let userRole = document.querySelector('#user-role')

userName.textContent = user.nom
userEmail.textContent = user.email
userRole.textContent = user.role

