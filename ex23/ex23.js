function swapFisrtAndLastChar()
{
    var str = document.getElementById("string").value;
    if(str.length > 1)
    {
        var newStr = str.substring(1,str.length-1);
        newStr = str.charAt(str.length-1) + newStr + str.charAt(0);
        document.getElementById("output").innerHTML = newStr;

    }else alert("string too short");
}