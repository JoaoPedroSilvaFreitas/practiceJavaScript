function checkChar()
{
    var str = document.getElementById("string").value;
    var char = document.getElementById("char").value;

    for(i = 1; i < 4; i++)
    {
        if(str.charAt(i) == char[0])
        {
            document.getElementById("output").innerHTML = char + " is within the 2nd to 4th position";
            return;
        }
    }

    document.getElementById("output").innerHTML = char[0] + " is not within the 2nd to 4th position";
}