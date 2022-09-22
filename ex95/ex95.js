function replaceXwithY()
{
    document.getElementById("output").innerHTML = "";
    var array = [];
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    x = parseInt(x);
    y = parseInt(y);

    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));
    array.push(parseInt(d));
    array.push(parseInt(e));
    array.push(parseInt(f));

    for(i = 0; i < array.length; i++)
    {
        if(array[i] == x)
        {
            array[i] = y;
        }
    }


    for(i = 0; i < array.length; i++)
    {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "   " + array[i];
    }

    //document.getElementById("output").innerHTML = array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + ", " + array[4] + ", " + array[5];
     
}