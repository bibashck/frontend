
$(function () {

    let tblBody = $("#tblbody");
    let base_url = 'http://localhost:3000/';
    let imageFiles = '';
    let imageFilees = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
 
    $("#file-To-Uploads").on('change', function () {
        let formData = new FormData();
        let files = $("#file-To-Uploads").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: base_url + 'uploads',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFilees = data.filename;
                // $("#add-hero").prop("disabled", false);
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });

    $("#applyjob").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            number: $("#names").val(),
            jobpost: $("#postid").val(),
       
            cv:imageFilees
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/apply',
             data: user,
     
             success: function (user) {
                 alert("Registration Successful");
                 window.location.href = '/jobslistpoindividual.html';    
             },
             error: function () {
                 alert("Registration unSuccessful");
                //  window.location.href = '/PostJobs.html'; 
             }
         });
     });

  
     
   
});