function addTwoDigits()
{
    var x = document.getElementById("number1").value;

    if(x.length <= 2)
    {
        document.getElementById("output").innerHTML = (x % 10) + Math.floor(x / 10);
    }else alert("integer length must be lesser o equal 2")

}