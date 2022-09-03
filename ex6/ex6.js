function isLeapYear(){
    var year = document.getElementById("year").value;
    if(year % 4 == 0)
        console.log("leap year")
    else console.log("not leap year")
}