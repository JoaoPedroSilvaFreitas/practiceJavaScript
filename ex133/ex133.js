function properImproper()
{
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);

    if(Math.abs(number1 / number2) < 1)
    {
        document.getElementById("output").innerHTML = "Proper";
    }else document.getElementById("output").innerHTML = "Improper";
    
}


