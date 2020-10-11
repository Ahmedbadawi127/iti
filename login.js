

    $(document).ready(function() {
    $( function() {
        $( "#accordion" ).accordion();
    } );
    $("#loginPage").click(function(){
        $("#logindiv").css("display", "block");
        $("#logindiv").css('opacity', '0.8');
        return false;
    });
    $("#cancel").click(function() {
    $("#logindiv").hide();
    });
    
    // Login form popup login-button click event.
    $("#loginbtn").click(function() {
    var name = $("#username").val();
    var password = $("#password").val();
    if (name == "" || password == ""){
    alert("Username or Password was Wrong");
    }else{
    $("#logindiv").css("display", "none");
    alert("Welcome " + name);
    }
    });
    });