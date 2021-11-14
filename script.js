
let videoBtn = document.querySelectorAll('.vid-btn');


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});












let email = document.getElementById("email");
function validation()
{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value))
    {
        error1.innerHTML = "";
        error1.style.color="green";
        email.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error1.innerHTML = "InValid";
        error1.style.color="red";
        email.style.borderColor =  "#e74c3c";
        
    }
    if(email.value=="")
    {
        email.style.borderColor =  "lightgray";
        return false;
    }
}







// let password = document.getElementById("password");
// function passwordChanged()
// {


//     let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
//     if(regpass.test(password.value))
//     {
//         error2.innerHTML = "";
//         error2.style.color="green";
//         password.style.borderColor =  "#27ae60";
//         return true;
//     }
//     else
//     {
//         error2.innerHTML = "InValid";
//         error2.style.color="red";
//         password.style.borderColor =  "#e74c3c";
        
//     }
//     if(password.value=="")
//     {
//         password.style.borderColor =  "lightgray";
//         return false;
//     }
// }











let ph = document.getElementById("ph");
function validationph()
{
    let regph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regph.test(ph.value))
    {
        error3.innerHTML = "";
        error3.style.color="green";
        ph.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error3.innerHTML = "InValid";
        error3.style.color="red";
        ph.style.borderColor =  "#e74c3c";
        
    }
    if(password.value=="")
    {
        password.style.borderColor =  "lightgray";
        return false;
    }
}


function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
          
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}