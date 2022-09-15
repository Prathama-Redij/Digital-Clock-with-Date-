var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var ampm = document.querySelector('.AM-or-PM');

function showDayAndMonth(){
    var runningdate = new Date();
    var Days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = runningdate.getDay();
    var month = runningdate.getMonth();
    var year = runningdate.getFullYear();
    var date = runningdate.getDate();

    var customDayMonth = Days[day] + ", " + date + " " + Months[month] + " " + year;
    
    document.querySelector("h2").innerHTML = customDayMonth;
}

var clock= setInterval( function time() {
    var current_time = new Date();
    var hr = current_time.getHours();
    var min = current_time.getMinutes();
    var sec = current_time.getSeconds();
    var am = 'AM';

    if(hr=== 00){
        hr = 12
        am = 'AM';
    }
    else if( hr === 12 ){
        am = 'PM';
    }
    else if( hr > 12){
        hr = hr - 12
        am = 'PM';
    }


    if(hr < 12){

    }

    if(hr < 10){
        hr= '0' + hr;
    }

    if(min < 10){
        min= '0' + min;
    }

    if(sec < 10){
        sec= '0' + sec;
    }

hours.textContent = hr;
minutes.textContent = min;
seconds.textContent = sec;
ampm.textContent = am;



    
}, 1000);

showDayAndMonth();