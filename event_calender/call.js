// document.addEventListener('DOMContentLoaded', function() {

// var calendarEl = document.getElementById('calendar');

// var calendar = new FullCalendar.Calendar(calendarEl, {

// initialView: 'dayGridMonth',

// headerToolbar: {

// left: 'prev,next today',

// center: 'title',

// right: 'dayGridMonth,timeGridWeek,timeGridDay'

// },

// events: [

// {
// title: 'Hackathon',
// start: '2026-03-12'
// },

// {
// title: 'Tech Workshop',
// start: '2026-03-18'
// },

// {
// title: 'Cultural Fest',
// start: '2026-03-25'
// }

// ],

// dateClick: function(info) {

// alert("Date clicked: " + info.dateStr);

// },

// eventClick: function(info) {

// alert("Event: " + info.event.title);

// }

// });

// calendar.render();

// });

document.addEventListener('DOMContentLoaded', function() {

var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {

initialView: 'dayGridMonth',

headerToolbar: {

left: 'prev,next today',

center: 'title',

right: 'dayGridMonth,timeGridWeek,timeGridDay'

},

events: [

{
title: 'Hackathon',
start: '2026-03-12'
},

{
title: 'Tech Workshop',
start: '2026-03-18'
},

{
title: 'Cultural Fest',
start: '2026-03-25'
}

],

dateClick: function(info) {

alert("Date clicked: " + info.dateStr);

},

eventClick: function(info) {

alert("Event: " + info.event.title);

}

});

calendar.render();

});