function findBiggestString()
{
    var array = [];
    var max = "";
    var a = document.getElementById("string1").value;
    var b = document.getElementById("string2").value;
    var c = document.getElementById("string3").value;
    var d = document.getElementById("string4").value;


    array.push(a);
    array.push(b);
    array.push(c);
    array.push(d);

    for(i = 0; i < array.length;i++)
    {
        if(array[i].length > max.length)
        {
            max = array[i];
        }
    }

    document.getElementById("output").innerHTML = "biggest string is: " + max;
}