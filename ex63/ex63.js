function moveMiddleChar()
{
    var str = document.getElementById("string").value;

    if(str.length >= 3 && str.length % 2 != 0)
    {
        document.getElementById("output").innerHTML = str.substring((str.length/2)-1,(str.length/2)+2);
    }else alert("string length must be greater or equal 3 and odd");

}