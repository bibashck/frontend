$(document).ready(function(){

    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });


$("#login-btn").on('click', function (e) {
   e.preventDefault();
   console.log("hello");
   console.log("username");
    let user = {
        username: $("#username").val(),
        password: $("#pass").val(),
        
        
    };
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users/login',
        data: user,

        success: function (user) {
            alert("Login Successful");
            window.location.href = 'jobslistpo.html';  
            $('#login-form').trigger('reset');
        },
        error: function () {
            alert("Fill all the form fields!");
        }
    });
});
$("#fileToUpload").on('change', function () {
    let formData = new FormData();
    let files = $("#fileToUpload").get(0).files;
    if (files.length > 0) {
        formData.append("imageFile", files[0]);
    }
    // $("#add-hero").prop("disabled", true);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/uploads',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success: function (data) {
            imageFile = data.filename;
            // $("#add-hero").prop("disabled", false);
        },
        error: function () {
            alert("Image upload failed!");
        }
    });
});

$("#Register-btn").on('click', function (e) {

   e.preventDefault();

   console.log("hello");

    let user = {
        username: $("#user").val(),
        password: $("#pass-repeat").val(),
        FirstName: $("#firstname").val(),
        LastName: $("#lastname").val(),
        contactnumber: $("#contactno").val(),
        email: $("#email").val(),
        Country: $("#country").val(),
        dob: $("#dob").val(),
        Address: $("#Address").val(),
        publisher: $('#publisher').val(),
        image: imageFile
    };
    console.log(user);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users/signup',
        data: user,

        success: function (user) {
            alert("Registration Successful");
            window.location.href = '/index.html';    
        },
        error: function () {
            alert("regis");
        }
    });
});
});
