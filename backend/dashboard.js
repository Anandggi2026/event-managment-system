// ---------- SUB EVENT LIMIT ----------

let maxSubEvents = 4;

function addSubEvent() {

let container = document.getElementById("subEvents");
let current = container.children.length;

if(current >= maxSubEvents){
alert("Maximum 4 sub-events allowed");
return;
}

let input = document.createElement("input");
input.type = "text";
input.placeholder = "Sub Event " + (current + 1);

container.appendChild(input);

}


// ---------- FORM RESET ----------

function resetForm(){

document.getElementById("eventForm").reset();

let container = document.getElementById("subEvents");
container.innerHTML = "";

for(let i=1;i<=2;i++){
let input = document.createElement("input");
input.type="text";
input.placeholder="Sub Event "+i;
container.appendChild(input);
}

}


// ---------- FORM SUBMIT ----------

document.getElementById("eventForm").addEventListener("submit",function(e){

e.preventDefault();

let eventName = document.getElementById("eventName").value;
let date = document.getElementById("eventDate").value;
let venue = document.getElementById("venue").value;

if(eventName=="" || date=="" || venue==""){
alert("Please fill all required fields");
return;
}

alert("Event Created Successfully!");

});


// ---------- JOIN EVENT BUTTON ----------

function joinEvent(eventName){

alert("You joined " + eventName);

}