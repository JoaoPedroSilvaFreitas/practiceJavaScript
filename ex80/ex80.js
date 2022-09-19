function swapFirstAndLast()
{
    var array = [];
    var aux;
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;
    var a = document.getElementById("number4").value;
    var b = document.getElementById("number5").value;
    var c = document.getElementById("number6").value;

    array.push(parseInt(x));
    array.push(parseInt(y));
    array.push(parseInt(z));
    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));


    aux = array[array.length-1];
    array[array.length-1] = array[0];
    array[0] = aux ;

    document.getElementById("output").innerHTML = array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + ", " + array[4] + ", " + array[5];
}