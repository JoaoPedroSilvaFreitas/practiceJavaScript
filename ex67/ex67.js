function removeP()
{
    var str = document.getElementById("string").value;

    let start = 0;
    let end = str.length;

    if (str.length > 0 && str[0] == 'P') 
    { 
        start = 1; 
    }

    if (str.length > 1 && str[str.length - 1] == 'P') 
    {
        end--;
    }

    document.getElementById("output").innerHTML = str.substring(start, end);

}