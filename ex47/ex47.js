function checkRange()
{
    var number = document.getElementById("number").value;

    if(number >= 40 && number <= 10000)
    {
        document.getElementById("output").innerHTML = "in range";
    }else document.getElementById("output").innerHTML = "not in range";

}