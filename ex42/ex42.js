function checkMode()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;

    if ( number1 < number2 && number2 < number3) 
    {
        document.getElementById("output").innerHTML = "strict mode";    
    }
    else if(number2 < number3) 
    {
        document.getElementById("output").innerHTML = "Soft mode";
    }else document.getElementById("output").innerHTML = "neither";
}