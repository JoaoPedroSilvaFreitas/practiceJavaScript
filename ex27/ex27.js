function swapSubstring()
{
    var str = document.getElementById("string").value;
    if(str.substring(0,4) == "Java" || str.substring(0,4) == "java")
    {
        document.getElementById("output").innerHTML = "String begin with java";
    }else document.getElementById("output").innerHTML = "String do not begin with java";
}