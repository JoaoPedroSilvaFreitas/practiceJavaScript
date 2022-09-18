function checkSameChar()
{
    var array = [];
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;
    
    array.push(x);
    array.push(y);
    array.push(z);

    if(array[0] == array[array.length-1])
    {
        document.getElementById("output").innerHTML = "first and last element are the same!";
    }else document.getElementById("output").innerHTML = "first and last element are not the same!";

    
}