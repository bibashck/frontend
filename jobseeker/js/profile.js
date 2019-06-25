

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
            address

 
        },
        error: function () {
            alert('Something went wrong!');
        }
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