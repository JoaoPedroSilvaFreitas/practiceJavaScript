function swapSubstring()
{
    var str = document.getElementById("string").value;
    if(str.length >= 3)
    {
        var newStr = str.substring(str.length-3,str.length);
        document.getElementById("output").innerHTML = newStr + str + newStr;

    }else alert("string too short");
}