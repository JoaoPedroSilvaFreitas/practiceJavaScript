function addPy()
{
    var str = document.getElementById("string").value;
    if (!(str[0] == "P" && str[1] == "y"))
    {
        str = "Py" + str;
    }
    document.getElementById("output").innerHTML = str;
}