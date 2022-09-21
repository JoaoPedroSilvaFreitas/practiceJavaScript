function divideSimilar()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("divisor").value;

    if((x % z == 0 && y % z == 0) || (x % z != 0 && y % z != 0))
    {
        document.getElementById("output").innerHTML = "Similar";
    }else document.getElementById("output").innerHTML = "Not similar";

    
}