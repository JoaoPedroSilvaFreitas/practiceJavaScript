function checkStrScript()
{
    var str = document.getElementById("string").value;
    if(str.substr(4,10) == "Script" || str.substr(4,10) == "script")
    {
        document.getElementById("output").innerHTML = str.substr(0,4) + str.substr(10, str.length);
    }else document.getElementById("output").innerHTML = str;
}