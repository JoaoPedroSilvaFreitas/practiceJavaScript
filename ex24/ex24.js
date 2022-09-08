function addFirstChar()
{
    var str = document.getElementById("string").value;
    document.getElementById("output").innerHTML = str.charAt(0) + str + str.charAt(0);
}