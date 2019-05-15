$(function () {

    $.ajaxSetup({
        xhrFields:{
            withCredentials:true
        }
    });  

    let tblBody = $("#tblbody");
    let base_url = 'http://localhost:3000/';
    let imageFile = '';

    function rowTemplate(hero) {
        let oneRow = "<tr><td>" + hero.name + "</td><td>" + hero.desc + "</td>";
        if (hero.image !== '') {
            oneRow += "<td><img src= " + base_url + "uploads/" + hero.image + " width='60' /></td>";
        } else {
            oneRow += "<td> No Image </td>";
        }
        oneRow += '<td><button type="button" class="btn btn-danger delete" hero_id=' + hero._id + '>Del</button></td> </tr>';
        return oneRow;
    }
    

    $("#registation").on('click', function (e) {
        e.preventDefault();

        let user = {
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            username: $("#username").val(),
            password: $("#password").val()
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'users/signup',
            data: user,
            success: function (user) {
                console.log("Registered Sucessfully");
                //$(location).attr('href','dashboard.html');
                window.location.href='login.html'
            },
            error: function () {
                alert("Fill all the form fields!");
                console.log("Failed to Register");
            }
        });
    });

    $("#login").on('click', function (e) {
        e.preventDefault();

        let user = {
            username: $("#username").val(),
            password: $("#password").val()
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'users/login',
            data: user,
            success: function (user) {
                console.log("Login Sucessfully");
                //$(location).attr('href','dashboard.html');
                window.location.href='dashboard.html'
            },
            error: function () {
                alert("Fill all the form fields!");
                console.log("Login Failed");
            }
        });
    });

    $.ajax({
        type: 'GET',
        url: base_url + 'heroes',
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

    $("#fileToUpload").on('change', function () {
        let formData = new FormData();
        let files = $("#fileToUpload").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: base_url + 'upload',
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

    $("#add-hero").on('click', function () {
        let hero = {
            name: $("#name").val(),
            desc: $("#desc").val(),
            image: imageFile
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'heroes',
            data: hero,
            success: function (hero) {
                tblBody.append(rowTemplate(hero));
                imageFile = '';
                $('#hero-form').trigger('reset');
            },
            error: function () {
                alert("Fill all the form fields!");
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
            url: base_url + 'heroes/' + $(this).attr('hero_id'),
            success: function () {
                location.reload();
            }
        })
    });
});