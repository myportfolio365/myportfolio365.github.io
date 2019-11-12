function postToGoogle() {
    var firstname = $("#first-name").val();
    var lastname = $("#last-name").val();
    var email = $("#email").val();
    var phoneno = $("#phone").val();
    var message = $("#message").val();
    
     
    if(firstname == ""){
        alert('Please Fill Your First Name');
        document.getElementById("first-name").focus();
        return false;
    }
    if(lastname == ""){
        alert('Please Fill Your last Name');
        document.getElementById("last-name").focus();
        return false;
    }
    if(email == ""){
        alert('Please provide email address');
        document.getElementById("email").focus();
        return false;
    }
    if(phoneno == ""){
        alert('Please provide your phone no');
        document.getElementById("phone").focus();
        return false;
    }
    
    $.ajax({
        url: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSftdSU6MmXq8EsamoQho2GwPmLMfhA1RMsnJhvRkVVH2Pv9lA/formResponse",
        data: {"entry.1428174507": firstname, "entry.138224580": lastname,"entry.2112564632": email, "entry.1666344626":phoneno,
		"entry.368722082":message},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            { 
                alert("Response is successfully submitted");
            }
    });
    return false;
}
