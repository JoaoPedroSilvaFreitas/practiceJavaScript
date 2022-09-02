const data = new Date();

function numberToDay(number){
    if(number == 0)
    {
        return "Sunday";
    }else if(number == 1){
        return "Monday";
    }else if(number == 2){
        return "Tuesday";
    }else if(number == 3){
        return "Wednesday";
    }else if(number == 4){
        return "Thursday";
    }else if(number == 5){
        return "Friday";
    }else if(number == 6){
        return "Saturday";
    }
}

console.log("Today is: " +  numberToDay(data.getDay()));
console.log("Current time is: " + data.getHours() + ":" + data.getMinutes());