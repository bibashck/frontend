
$(function () {

    let tblBody = $("#tblbody");
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    $.ajaxSetup({
 xhrFields:{
     withCredentials: true
 }
    });
    
//   $(document).ready(function(){
// $('#add-hero').on('submit',function(e){
//     e.preventDefault();
//     var name= $("#name").val();
//         var    desc= $("#desc").val();
// })

//   })

// function rowTemplate(hero) {
//     let oneRow = "<tr><td>" + hero.name + "</td><td>" + hero.description;
//     oneRow += '<td><button type="button" class="btn btn-danger delete" hero_id=' + hero._id + '>Del</button></td> </tr>';
   
//     return oneRow;
// }

// $.ajax({
//     type: 'GET',
//     url: base_url + 'jobposts',
//     success: function (heroes) {
//         let myRows = [];
//         $.each(heroes, function (index, hero) {
//             myRows.push(rowTemplate(hero));
//         });
//         tblBody.append(myRows);
//     },
//     error: function () {
//         alert('Something went wrong!');
//     }
// });
$("#file-To-Upload").on('change', function () {
    let formData = new FormData();
    let files = $("#file-To-Upload").get(0).files;
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
            imageFiles = data.filename;
            // $("#add-hero").prop("disabled", false);
        },
        error: function () {
            alert("Image upload failed!");
        }
    });
});
$("#update-job").on('click','.view', function (e) {

    e.preventDefault();
 
    console.log("hello");
 
     let user = {
        name: $("#name").val(),
        JobType: $("#JobType").val(),
        Applicant: $("#Applicant").val(),
        Deadline: $("#Deadline").val(),
        Salary: $("#Salary").val(),
        Description: $("#description").val(),
     };
     console.log(user);
     $.ajax({
         type: 'PUT',
         url: 'http://localhost:3000/jobposts/'+ $(this).attr('post_id'),
         data: user,
 
         success: function (user) {
             alert("Registration Successful");
             window.location.href = '/PostJobs.html';    
         },
         error: function () {
             alert("Registration unSuccessful");
            //  window.location.href = '/PostJobs.html'; 
         }
     });
 })

    $("#add-job").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            name: $("#name").val(),
            JobType: $("#JobType").val(),
            Applicant: $("#Applicant").val(),
            Deadline: $("#Deadline").val(),
            Salary: $("#Salary").val(),
            Description: $("#description").val(),
            image: imageFiles
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/jobposts',
             data: user,
     
             success: function (user) {
                 alert("Registration Successful");
                 window.location.href = '/PostJobs.html';    
             },
             error: function () {
                 alert("Registration unSuccessful");
                //  window.location.href = '/PostJobs.html'; 
             }
         });
     });

    $("#remove-heroes").on('click', function () {
        if (confirm("Do you want to delete all heroes?")) {
            $.ajax({
                type: 'DELETE',
                url: base_url + 'heroes',
                success: function () {
                    location.reload();
                },
                error: function () {
                    alert("Couldn't delete all heroes");
                }
            });
        }
    });

  
    tblBody.on('click', '.delete', function () {
        $.ajax({
            type: 'DELETE',
            url: base_url + 'jobposts/' + $(this).attr('hero_id'),
            success: function () {
                location.reload();
            }
        })
    });
    $("#remove-heroes").on('click', function () {
        if (confirm("Do you want to delete all heroes?")) {
            $.ajax({
                type: 'DELETE',
                url: base_url + 'heroes',
                success: function () {
                    location.reload();
                },
                error: function () {
                    alert("Couldn't delete all heroes");
                }
            });
        }
    });


    $("#logout-btn").on('click', function (event) {

        console.log("Logout Success");

        $.ajax({ 
            type: 'GET',
            url: 'http://localhost:3000/users/logout',
            success: function () {               
                alert("Logging Out Succesfully");
                window.location = "index.html";
            },
            error: function () {
                alert("Not Logged in Yet");
                
            }
        });
      });
    

      $("#Button").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
             username: $("#username").val(),
             password: $("#password").val(),
             
         };
         console.log(user);
         $.ajax({
             type: 'POST',
             url: 'http://localhost:3000/users/signup',
             data: user,
     
             success: function (user) {
                 alert("Registration Successful");
                 window.location.href = '/login.html';    
             },
             error: function () {
                 alert("Fill all the form fields!");
             }
         });
     });
    
     function rowTemplate(hero) {
        let oneRow = '<div class="card-body">'+ '<img src= ' + base_url + "uploads/" + hero.image  + "width=50px>"+ ' <h6 class="card-title">Job name:&nbsp;'+hero.name + 
        '</h6>' + '<p><small class="ml-1">job type:&nbsp; '+hero.JobType + '</p>'+'<b>Preference Skills: </b>'+hero.Description+'<br><br><b>Total Applicant: </b>'+hero.Applicant+'<p class="card-text mt-3"><b>Deadline: </b>'+hero.Deadline +'<br><b>Salary: </b>'+hero.Salary+'</div><hr>';
      
        return oneRow;
    }

    $.ajax({
        type: 'GET',
        url: base_url + 'jobposts',
        success: function (heroes) {
            let myRows = [];
            $.each(heroes, function (index, hero) {
                myRows.push(rowTemplate(hero));
            });
            tblBody.append(myRows);
        },
        error: function () {
            alert('Something went wrong!');
        }
    });
   
});