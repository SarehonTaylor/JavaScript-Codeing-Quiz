let time; //empty time variable
var currenttime= $ 
('#time-display');

var update = function() {
time = moment().format('h:mm:ss a')
currenttime.text(time);
}
$(document).ready(function() {
    update();
    setInterval(update, 1000)
})

