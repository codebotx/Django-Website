var database = firebase.database();
var counter = Date.now();

function writeUserData() {
    var url = [];
    url.push(url1, url2, url3);
    console.log(url);

    var favorite = [];
    
    $.each($("input[name='jobb']:checked"), function(){
        favorite.push($(this).val());
    });

    console.log(favorite);

    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    
    //Create User with Email and Password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            alert('successful');
        })

        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
    });

    const db_owner = firebase.database().ref('owners/'+counter);
    const db_park = firebase.database().ref('parking-details/'+counter);
    db_owner.set({
        email: email,
        password: password
    });
    db_park.set({
        OwnerName: document.getElementById('name').value,
        OwnerPhone: document.getElementById('phone').value,
        OwnerEmail: email,
        ParkingName: document.getElementById('pname').value,
        ParkingAddress: document.getElementById('address').value,
        SpacePerLot: document.getElementById('space').value,
        NumberOfLots: document.getElementById('lot').value,
        NUmberOfCam: document.getElementById('cam').value,
        features: favorite.join(", "),
        url: url.join(", ")
    });
alert('Publish Successful');
window.location = 'login.html';
}