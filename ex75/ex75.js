function takeMiddle()
{
    var array1 = [];
    var array2 = [];

    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    array1.push(parseInt(x));
    array1.push(parseInt(y));
    array1.push(parseInt(z));

    x = document.getElementById("number4").value;
    y = document.getElementById("number5").value;
    z = document.getElementById("number6").value;

    array2.push(parseInt(x));
    array2.push(parseInt(y));
    array2.push(parseInt(z));

    var array = [];
    array.push(array1[1]);
    array.push(array2[1]);

    document.getElementById("output").innerHTML = array[0] + ", " + array[1];
}