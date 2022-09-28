function is_diagonal()
{
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var number = parseInt(document.getElementById("number").value);

    if(x > y)
    {
        if(number >= y && number <= x)
        {
            document.getElementById("output").innerHTML = "in range"
        }else document.getElementById("output").innerHTML = "out of range"
    }else
    {
        if(number >= x && number <= y)
        {
            document.getElementById("output").innerHTML = "in range"
        }else document.getElementById("output").innerHTML = "out of range"
    }

    
}