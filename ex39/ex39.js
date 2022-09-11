function checkSum()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    
    sum = parseInt(number1) + parseInt(number2);
    if(sum >= 50 && sum <= 80)
    {
        document.getElementById("output").innerHTML = 65;
    }else document.getElementById("output").innerHTML = 80;
}