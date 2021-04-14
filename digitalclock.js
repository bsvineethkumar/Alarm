var offSetTime ={
  bangalore : '330'
}
function time(minutes){
  var date = new Date();
  var currentDate = date.valueOf();
  var requiredDate = currentDate + ((date.getTimezoneOffset()*60)*1000);

  var newDate = requiredDate + ((minutes*60)*1000);
  var updateDate = new Date(newDate);
  return updateDate;
}

function getHours (dateObj){
  if(dateObj instanceof Date){
    return dateObj.getHours() + ':' + dateObj.getMinutes();
  }
}



function getseconds (dateObj){
  if(dateObj instanceof Date){
    return dateObj.getSeconds() ;
  }
}

function getday (dateObj){
  var day = new Array();
    day[0] = 'Sun';
    day[1] = 'Mon';
    day[2] = 'Tue';
    day[3] = 'Wed';
    day[4] = 'Thu';
    day[5] = 'Fri';
    day[6] = 'Sat';
    
    var newDate = new Date();
    var currentDay = day[newDate.getDay()];
if(dateObj instanceof Date){
    return currentDay ;
  }
}



function getyear (dateObj){
if(dateObj instanceof Date){
    return dateObj.getDate() + '&nbsp;&nbsp;' + dateObj.getFullYear() ;
  }
}

function getMonth(dataObj) {
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var newMonth = new Date();
  var currentMonth = month[newMonth.getMonth()];
  return currentMonth;
}
var Sound = document.getElementById('alarmSound');
var timer;
var Alarm;
document.querySelector('#setButton').addEventListener('click', function(){
   
      var hours = document.querySelector('.hrs').value; 
      var minutes = document.querySelector('.mins').value;      
     var hours, minutes;
       
    var currentDate = new Date();
    var time = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() + ' ' + hours + ':' + minutes;
    var alarmTime = new Date(time);
    
    if(alarmTime <= currentDate){
      Sound.play();
    }
    else{
      Sound.pause();
    }
    
    checkForAlarm(time);                                        
});

function checkForAlarm(time){
  timer = setInterval(() => {
    var hours = document.querySelector('.hrs').value; 
    var minutes = document.querySelector('.mins').value;      
       
    var currentDate = new Date();
    var alarmTime = new Date(time);
    var Sound = document.getElementById('alarmSound')
    if(alarmTime <= currentDate){
      Sound.play();
    }
    else{
      Sound.pause();
    }
  }, 1000);
}
document.querySelector('.reset').addEventListener('click', ResetAlarm);

function ResetAlarm(){
    setHour = 0;
    setminutes = 0;
     document.getElementById('hr').value = ''; 
    document.getElementById('min').value = '';
   // audio.pause();
   Sound.pause();
   clearInterval(timer);
}

function currentTime(){
    let container = ' '
    for(let city in offSetTime){
        let offsetmin = offSetTime[city];
        let hours = time(offsetmin).getHours();
        container += "<div class='container'><div class='time'><span class='hours'>"+getHours(time(offsetmin))+"</span><span class='seconds'>"+getseconds(time(offsetmin))+"</span></div><div class='mdy'><span class='month'>"+getMonth(time(offsetmin))+"</span><span class='year'>"+getyear(time(offsetmin))+"</span><span class='day'>"+getday(time(offsetmin))+"</span></div></div>"
    }
    document.getElementById('bangalore').innerHTML = container;
    setTimeout(currentTime, 1000);
}
currentTime();


