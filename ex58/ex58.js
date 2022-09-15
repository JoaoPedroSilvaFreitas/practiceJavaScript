function copyLast4()
{
    var str = document.getElementById("string").value;

    if(str.length <= 3)
    {
        document.getElementById("output").innerHTML = str.repeat(4);
    }else
    {
        document.getElementById("output").innerHTML = str.substring(str.length-3, str.length).repeat(4);
    }

    

}