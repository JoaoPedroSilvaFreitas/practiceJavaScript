function checkInversion()
{
    
    var array = [];
    var cont = 0;
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;

    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));
    array.push(parseInt(d));
    array.push(parseInt(e));
    array.push(parseInt(f));

    for(i = 0; i < array.length; i++)
    {
        for(j = 0; j < array.length; j++)
        {
            if(array[i] > array[j] && i < j)
            {
                cont++;
            }
        }
    }
    
    document.getElementById("output").innerHTML = "Numbers of inversions: " + cont;
}