function oneInFirstOrLast()
{
    var x = document.getElementById("array").value;
    var array = x.split("");

    for(i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }

    if(array.length >= 1)
    {
        if(parseInt(array[0]) == 1 || parseInt(array[array.length-1]) == 1)
        {
            document.getElementById("output").innerHTML = "1 in first or last position!";
        }else document.getElementById("output").innerHTML = "1 not fount in first or last position!";

    }else alert("Array length must be greater or equal 1!");
}