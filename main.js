var mainApp = {}
var uid = null

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		uid = user.uid
		// User is signed in.
	} else {
		uid = null
		window.location.replace("index.html")
	}
})

function logOut() {
	firebase.auth().signOut();
}

mainApp.logOut = logOut;

var sujectionRef = firebase.database().ref('sujection')

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
// get values
var nom = getInputValue('nom');
var prenom = getInputValue('prenom');
var email = getInputValue('email');
var filiale = getInputValue('filiale');
var textbox = getInputValue('textbox');

saveMessage(nom, prenom, email, filiale, textbox)

document.querySelector('.alert').style.display = 'block'

setTimeout(function(){
document.querySelector('.alert').style.display = 'none'
},3000)


}

// function to get form value
function getInputValue(id){
  return document.getElementById(id).value
}

// save message to function
function saveMessage(nom, prenom, email, filiale, textbox){
  var newSujectRef = sujectionRef.push()
  sujectionRef.set({
    nom: nom,
    prenom: prenom,
    email: email,
    filiale: filiale,
    textbox: textbox
  })
}
