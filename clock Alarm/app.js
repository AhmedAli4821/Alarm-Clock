var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav")
sound.loop =true;

var clock = document.getElementById("clock")

var currentTime =setInterval(function(){
    var date = new Date();
    var hours = (12-(date.getHours()));
    var minuts = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM'
    if(hours < 0){
        hours = hours * -1;
    }else if(hours==00){
        hours = 12;
    }else{
        hours = hours;
    }
    clock.textContent = addZero(hours) + ":" 
    + addZero(minuts) + ":" + addZero(seconds) + ":" + ampm;
},1000)

function addZero(time){
return (time < 10) ? "0" + time :time;
}
// hoursmenu

function hoursMenu(){
    var select = document.getElementById("alarmhrs");
    var hrs = 12;
     for(i=1; i <= hrs; i++){
        select.options[select.options.length]=
        new Option(i < 10 ? "0" + i:i,i);
    }
}
  hoursMenu();

 function minutsMenu(){
    var select = document.getElementById("alarmmins");
    var mint = 59;
    for(i=0; i <= mint; i++){
        select.options[select.options.length]=
        new Option (i < 10 ? "0" + i:i,i);
    }
}
 minutsMenu();

 function secondsMenu(){
    var select = document.getElementById("alarmsec");
    var scnd = 59;
    for(i=0; i <= scnd; i++){
        select.options[select.options.length]=
        new Option (i < 10 ? "0" + i:i,i);
    }
}

secondsMenu();

 function setAlarm(){
    
      var hr = document.getElementById("alarmhrs")
     var min = document.getElementById("alarmmins")
     var sec = document.getElementById("alarmsec")
     var ap = document.getElementById("ampm")

     var selectHours = hr.options[hr.selectedIndex].value;
     var selectMinuts = min.options[min.selectedIndex].value;
     var selectSeconds = sec.options[sec.selectedIndex].value;
     var selectAp = ap.options[ap.selectedIndex].value;
     
     var alarmTime = addZero(selectHours) + ":" +
                     addZero(selectMinuts) + ":" +
                     addZero(selectSeconds) + ":" +
                     addZero(selectAp );

                    document.getElementById("alarmhrs").disabled=true;
                    document.getElementById("alarmmins").disabled=true;
                    document.getElementById("alarmsec").disabled=true;
                    document.getElementById("ampm").disabled=true;

    var clock = document.getElementById("clock");

    setInterval(function(){
        var date = new Date();
        var hours = (12-(date.getHours()));
        var minuts = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM'
        if(hours < 0){
            hours = hours * -1;
        }else if(hours==00){
            hours = 12;
        }else{
            hours = hours;
        }
        var currentTime = clock.textContent = addZero(hours) + ":" 
        + addZero(minuts) + ":" + addZero(seconds) + ":" + ampm;

        if(alarmTime == currentTime){
            sound.play();

         
        }

    
    
   
    },1000)

} 
          function clearAlarm(){

                document.getElementById("alarmhrs").disabled=false;
                document.getElementById("alarmmins").disabled=false;
                document.getElementById("alarmsec").disabled=false;
                document.getElementById("ampm").disabled=false;
                sound.pause();
                    
             }
            

   

  



