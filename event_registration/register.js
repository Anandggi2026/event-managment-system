const toggle = document.getElementById("modeToggle");

// check saved mode when page loads
if(localStorage.getItem("mode") === "dark"){
    document.body.classList.add("light-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", function(){

    document.body.classList.toggle("light-mode");

    // save mode
    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("mode","dark");
    } 
    else{
        localStorage.setItem("mode","light");
    }

});