function findThird()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    if(((x != y) && (x != z) && (y != z)) || ((x == y) && (x == z) && (y == z)))
    {
        document.getElementById("output").innerHTML = "all numbers are different or equal";
    }else
    {
        if(x == y)
        {
            document.getElementById("output").innerHTML = z;
        }else if(x == z)
        {
            document.getElementById("output").innerHTML = y;
        }else if(z == y)
        {
            document.getElementById("output").innerHTML = x;
        }
        
    }

    
}
