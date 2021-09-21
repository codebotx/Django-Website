function load(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            window.location = 'dash.html';
            // ...
        }
    });
}
//Sign In User with Email and Password
function sign(){
    var email= document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (){
            window.location = 'dash.html';
        })
        .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}

