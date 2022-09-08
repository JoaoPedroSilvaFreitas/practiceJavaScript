function checkMultipleOf()
{
    var number = document.getElementById("number").value;

    if((number % 3 == 0) && (number % 7 == 0))
    {
        document.getElementById("output").innerHTML = number + " is multiple of 3 and 7";

    }else if(number % 3 == 0)
    {
        document.getElementById("output").innerHTML = number + " is multiple of 3";

    }else if(number % 7 == 0)
    {
        document.getElementById("output").innerHTML = number + " is multiple of 7";

    }else
    {
        document.getElementById("output").innerHTML = number + " is not multiple of 3 or 7";
        
    }
}