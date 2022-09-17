function startWithLosOrNew()
{
    var str = document.getElementById("string").value;

    if((str.substring(0,3) == "Los" || str.substring(0,3) == "los") || (str.substring(0,3) == "New" || str.substring(0,3) == "new"))
    {
        document.getElementById("output").innerHTML = str;
    }else document.getElementById("output").innerHTML = "";

}