function concatenateString()
{
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;

    document.getElementById("output").innerHTML = str1.substring(1,str1.length) + str2.substring(1,str2.length);
    
}