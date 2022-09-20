function addWithoutCarry()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    var output = 0;
    var aux = 1;
    while (x > 0 && y > 0) 
    {
        output += aux * ((x + y) % 10);
        x = Math.floor(x / 10);
        y = Math.floor(y / 10);
        aux *= 10;
    }

    document.getElementById("output").innerHTML =  output;
}