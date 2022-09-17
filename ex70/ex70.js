function rotateLeft()
{
    var array = []
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    array[0] = parseInt(x);
    array[1] = parseInt(y);
    array[2] = parseInt(z);


    document.getElementById("output").innerHTML = array[1] + ", " + array[2] + ", " + array[0];
}