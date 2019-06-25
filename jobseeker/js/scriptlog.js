$(document).ready(function(){
    let base_url = 'http://localhost:3000/';
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
            if(user.publisher == true){
            alert("welcome publisher,you are login in");
            window.location.href = 'jobslistpoindividual.html';  
           
        }
        else{
alert("welcome seeker, you are logged in");
window.location.href = 'jobslistpoindividual.html'; 
        }
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

$("#submit-post").on('click', function (e) {

    e.preventDefault();
 
    console.log("hello");
 
     let user = {
        description: $("#description").val(),
         
         
     };
     console.log(user);
     $.ajax({
         type: 'POST',
         url: 'http://localhost:3000/post',
         data: user,
 
         success: function (user) {
             alert("Sucessfully added");
             window.location.href = '/post.html';    
         },
         error: function () {
             alert("write clearly");
         }
     });
 });
 function rowTemplates(hero) {
    let oneRow =  hero.description ;
   
    
    return oneRow;
}

$.ajax({
    type: 'GET',
    url: base_url + 'post',
    success: function (heroes) {
        let myRows = [];
        $.each(heroes, function (index, hero) {
            myRows.push(rowTemplates(hero));
        });
        tblbody.append(myRows);
    },
    error: function () {
        alert('Something went wrong!');
    }
});

});
