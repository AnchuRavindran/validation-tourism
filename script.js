
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
        error1.innerHTML = "Valid";
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



let password = document.getElementById("password");
function passwordChanged()
{


    let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regpass.test(password.value))
    {
        error2.innerHTML = "Valid";
        error2.style.color="green";
        password.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error2.innerHTML = "InValid";
        error2.style.color="red";
        password.style.borderColor =  "#e74c3c";
        
    }
    if(password.value=="")
    {
        password.style.borderColor =  "lightgray";
        return false;
    }
}






let ph = document.getElementById("ph");
function validationph()
{
    let regph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regph.test(ph.value))
    {
        error3.innerHTML = "Valid";
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
}
