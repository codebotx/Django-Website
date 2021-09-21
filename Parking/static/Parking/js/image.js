var url1 = '';
var url2 = '';
var url3 = '';
function getfile1(){
    var selectedFile;

        var pic = document.getElementById("photo1");

        // selected file is that file which user chosen by html form
        selectedFile = pic.files[0];

        // make save button disabled for few seconds that has id='submit_link'
        myfunction(); // call below written function

    function myfunction()
    {
        // select unique name for everytime when image uploaded
        // Date.now() is function that give current timestamp
        var name=Date.now();

        // make ref to your firebase storage and select images folder
        var storageRef = firebase.storage().ref('/images/'+ name);

        // put file to firebase
        var uploadTask = storageRef.put(selectedFile);

        // all working for progress bar that in html
        // to indicate image uploading... report
        uploadTask.on('state_changed', function(snapshot){
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            var uploader = document.getElementById('uploader1');
            uploader.value=progress;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {console.log(error);
        }, function() {

            // get the uploaded image url back
            uploadTask.snapshot.ref.getDownloadURL().then(
                function(downloadURL) {
                    // You get your url from here
                    url1 = downloadURL;
                    // print the image url
                    console.log(url1);

                });
        });
    }
}
function getfile2(){
    var selectedFile;

        var pic = document.getElementById("photo2");

        // selected file is that file which user chosen by html form
        selectedFile = pic.files[0];

        // make save button disabled for few seconds that has id='submit_link'

        myfunction(); // call below written function

    function myfunction()
    {
        // select unique name for everytime when image uploaded
        // Date.now() is function that give current timestamp
        var name=Date.now();

        // make ref to your firebase storage and select images folder
        var storageRef = firebase.storage().ref('/images/'+ name);

        // put file to firebase
        var uploadTask = storageRef.put(selectedFile);

        // all working for progress bar that in html
        // to indicate image uploading... report
        uploadTask.on('state_changed', function(snapshot){
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            var uploader = document.getElementById('uploader2');
            uploader.value=progress;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {console.log(error);
        }, function() {

            // get the uploaded image url back
            uploadTask.snapshot.ref.getDownloadURL().then(
                function(downloadURL) {

                    // You get your url from here
                    url2 = downloadURL;

                    // print the image url
                    console.log(url2);


                });
        });
    }
}
function getfile3() {
    var selectedFile;

        var pic = document.getElementById("photo3");

        // selected file is that file which user chosen by html form
        selectedFile = pic.files[0];

        // make save button disabled for few seconds that has id='submit_link'
        myfunction(); // call below written function

    function myfunction()
    {
        // select unique name for everytime when image uploaded
        // Date.now() is function that give current timestamp
        var name=Date.now();

        // make ref to your firebase storage and select images folder
        var storageRef = firebase.storage().ref('/images/'+ name);

        // put file to firebase
        var uploadTask = storageRef.put(selectedFile);

        // all working for progress bar that in html
        // to indicate image uploading... report
        uploadTask.on('state_changed', function(snapshot){
            var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            var uploader = document.getElementById('uploader3');
            uploader.value=progress;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {console.log(error);
        }, function() {
            // get the uploaded image url back
            uploadTask.snapshot.ref.getDownloadURL().then(
                function(downloadURL) {
                    // You get your url from here

                   url3 = downloadURL;
                   console.log(url3);
                });
        });
    }
}