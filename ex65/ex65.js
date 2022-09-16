function endWithScript()
{
    var str = document.getElementById("string").value;

    if(str.length >= 6)
    {
        if(str.substring(str.length-6,str.length) == "Script" || str.substring(str.length-6,str.length) == "script")
        {
            document.getElementById("output").innerHTML = "string end with Script";
        }else document.getElementById("output").innerHTML = "string does not end with Script";
    }else alert("string length must be greater or equal 6!");

}