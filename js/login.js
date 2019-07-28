
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location = 'index.html'
  } else {
    // No user is signed in.
    $('#loginButton').click(function(e) {
      e.preventDefault()
      alert('working');
      // var email = $('#loginEmail').val();
      // var password = $('#loginPassword').val();
      //
      // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // ...
      // });
    })
  }
});
