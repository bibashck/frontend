

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

    
  function rowTemplate(hero) {
    let oneRow = "<tr><td>"+hero.user.username + 
    "</td><td>"  +hero.cv +"</td><td>"+hero.number+"</td><td>"
    +hero.Salary +"</td><td>"+hero.Description+"</td>";
   
  
    return oneRow;
}

$.ajax({
    type: 'GET',
    url: base_url + 'apply/findmyonlydata',
    
    success: function (heroes) {
        console.log(heroes);
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