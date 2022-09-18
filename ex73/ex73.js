function reverseArray()
{
    var array = []
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    array.push(parseInt(x));
    array.push(parseInt(y));
    array.push(parseInt(z));

    var aux = array[array.length-1];    
    array[array.length-1] = array[0];
    array[0] = aux;

    document.getElementById("output").innerHTML = array[0] + ", " + array[1] + ", " + array[2];
}