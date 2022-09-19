function takeFirstAndLast()
{
    var array = [];
    var output = [];
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

    output.push(array[0]);
    output.push(array[array.length-1]);

    document.getElementById("output").innerHTML = output[0] + ", " + output[1];
}