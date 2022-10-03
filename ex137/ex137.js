function greaterThan15()
{
    let number = parseInt(document.getElementById("number").value);

    if(number > 15)
    {
        document.getElementById("output").innerHTML = number;
    }else document.getElementById("output").innerHTML = "15";

    
}


