function replaceSign()
{
    var output = "";
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("result").value;

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if(x + y == z)
    {
        output += " + ";
    }
    
    if(x - y == z)
    {
        output += " - ";
    }
    
    if(x * y == z)
    {
        output += " * ";
    }
    
    if(x / y == z)
    {
        output += " / ";
    }

    document.getElementById("output").innerHTML = "These signs obtain a correct expression:" + output;
    
}