function angleType()
{
    var x = document.getElementById("angle").value;

    if(x < 90 && x >= 0)
    {
        document.getElementById("output").innerHTML = "Acute angle";
    }else if(x == 90)
    {
        document.getElementById("output").innerHTML = "Right angle";
    }else if(x < 180 && x > 90)
    {
        document.getElementById("output").innerHTML = "Obtuse angle";
    }else if(x == 180)
    {
        document.getElementById("output").innerHTML = "Straight angle";
    }else alert("invalid angle")
    

}