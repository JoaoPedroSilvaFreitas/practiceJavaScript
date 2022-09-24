function organizeString()
{
    var str = document.getElementById("string").value;

    for(i = 0; i < str.length-1; i++)
    {
        if((str[i] == str[i].toLowerCase() && str[i+1] == str[i+1].toLowerCase()) || (str[i] == str[i].toUpperCase() && str[i+1] == str[i+1].toUpperCase()))
        {
            document.getElementById("output").innerHTML = "False";
            return;
        }
    }

    document.getElementById("output").innerHTML = "True";
}