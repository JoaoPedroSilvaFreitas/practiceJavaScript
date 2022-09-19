function contains30or40()
{
    var array = [];
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    array.push(parseInt(x));
    array.push(parseInt(y));

    if((array[0] == 30 && array[1] == 30) || (array[0] == 40 && array[1] == 40))
    {
        document.getElementById("output").innerHTML = "array contains 30 or 40 duplicates";
    }else document.getElementById("output").innerHTML = "array do not contains 30 or 40 duplicates";

}