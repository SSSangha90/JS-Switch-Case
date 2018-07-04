/*
function todaysTime() {
    
    // creating a variable that initialises the day.
    var gettingDate = new Date();
    
    //and returns the day in a number format. 
    var _day = gettingDate.getDay();
    
    // returns the hours
    var _hours = gettingDate.getHours();
    
    // returns the minutes
    var _minutes = gettingDate.getMinutes();
    
    // returns the seconds 
    var _seconds = gettingDate.getSeconds();
    
    var _clock = "Current Time : " + _hours + ":" + _minutes + ":" + _seconds
    
    console.log(_day + ","  + _clock);
    
    var actualDay;
    
    switch(_day){
            
        case 0: actualDay = "Sunday"; //console.log("Today is Sunday, day of rest!");
        break;
        
        case 1: actualDay = "Monday"; //console.log("Today is Monday, back to work!");
        break;    
            
        case 2: actualDay = "Tuesday"; //console.log("Today is takeaway Tuesday!");
        break;    
        
        case 3: actualDay = "Wednesday"; //console.log("Today is wacky Wednesday!");
        break;
            
        case 4: actualDay = "Thursday"; //console.log("Today is Thursday, almost the weekend!");
        break;
            
        case 5: actualDay = "Friday"; //console.log("Today is Friday, Happy Friyay!");
        break;
            
        case 6: actualDay = "Saturday"; //console.log("Today is Saturday, Hit the gym!");
        break;
            
        default: "Technical error has occured" //console.log("Seems like you don't know what day it is!");
        break;
            
    }
    
    document.getElementById("display").innerHTML = "Today is " + actualDay + ": " + _clock;
    
/*    if(_hours < 12){
        console.log("Hope you had a good breakfast.");
    }
    else{
        console.log("You must be full after your heavy lunch");
    }
*/
//} 
/*
todaysTime(); // run the function

setInterval(todaysTime,1000); //1000 sets it to milliseconds, reloaded at a specified interval, so it ticks every second. 

//todaysTime(); // run the function
*/








