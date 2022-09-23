function toLowerOrUpper()
{
    
    var upper = 0;
    var lower = 0;
    var str = document.getElementById("string").value;

    for(i = 0; i < str.length; i++)
    {
        if(str[i] == str[i].toLowerCase())
        {
            lower++;
        }else upper++;
    }

    if(lower > upper)
    {
        str = str.toLowerCase();
    }else str = str.toUpperCase();

    document.getElementById("output").innerHTML = str;
}