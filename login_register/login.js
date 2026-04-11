document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let role = document.getElementById("role").value;

if(email=="" || password=="" || role==""){
alert("Please fill all fields");
return;
}

alert("Login Successful");

/* Example role redirect simulation */

if(role=="student"){
window.location.href="student_dashboard.html";
}

else if(role=="faculty"){
window.location.href="faculty_dashboard.html";
}

else if(role=="admin"){
window.location.href="admin_dashboard.html";
}

});