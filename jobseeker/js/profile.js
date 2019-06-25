

$(function () {
    let tblBody1 = $("#myprofile");
    let tblBody = $("#tblbody");
    let tblBodyuser = $("#userpost");
    let tblupdate = $("#update-job");
  
    let tblupdatesss = $("#update-job");
  
    
    
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    $.ajaxSetup({
  xhrFields:{
     withCredentials: true
  }
    });


    $.ajax({
        type: 'GET',
        url: base_url + 'user/findmyonlydata',
    
        success: function (user) {
            console.log(user);
            // $("#strongname").val(user.FirstName);
            $( "#strongname" ).append(user.FirstName );
            $( "#strongnames" ).append(user.LastName );
            $( "#dob" ).append(user.dob );
            $( "#number" ).append(user.contactnumber );
            $( "#email" ).append(user.email );
            $( "#address" ).append(user.Address );
            $( "#image" ).append(user.image );
            $( "#Uname" ).append(user.username );
            $( "#country" ).append(user.Country );
            $('#user_image').append('img src="http://localhost:3000/uploads/'+user.image + '" ');
            address

 
        },
        error: function () {
            alert('Something went wrong!');
        }
    });

    $("#imageupload").on('change', function () {
        let formData = new FormData();
        let files = $("#imageupload").get(0).files;
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


    $("#uploadimage").on('click', function (e) {

        e.preventDefault();
     
        console.log("hello");
     
         let user = {
            
            
            image: imageFile
         };
         console.log(user);
         $.ajax({
             type: 'PUT',
             url: 'http://localhost:3000/user/',
             data: user,
     
             success: function (user) {
                 alert("update Successful");
                 window.location.href = '/index.html';    
             },
             error: function () {
                 alert("regis");
             }
         });
     });
  
      
  
  
//   tblBody.on('click','#updatejobpost', function () {
  
    
      
//       $.ajax({
//           type: 'GET',
//           url: base_url + 'user/findmyonlydata',
//           success: function (heroes) {
  
//               console.log("??????????????????????????????????????????????????????");
  
//               console.log(heroes);
  
//               console.log("??????????????????????????????????????????????????????");
  
//               $("#name").val(heroes.FirstName);
//               $("#name").val(heroes.name);
//               $("#JobType").val(heroes.JobType);
//               $("#Applicant").val(heroes.Applicant);
//               $("#Deadline").val(heroes.Deadline);
//               $("#description").val(heroes.Description);
//               $("#update-job").attr("post_id",heroes._id);
//               // $("#update-job").attr("post_id",heroes._id);
//               // $("#update-job").val(heroes._id);
  
  
   
//           },
//           error: function () {
//               alert('Something went wrong!');
//           }
//       });


//       });
  
  
  });