function first3ToLower()
{
    var str = document.getElementById("string").value;
    if(str.length <= 3)
    {   
        document.getElementById("output").innerHTML = str.toUpperCase();
    }else 
    {
        document.getElementById("output").innerHTML = str.substring(0,3).toLowerCase() + str.substring(3,str.length);
    }
}