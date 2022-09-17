function removeNchar()
{
    var str = document.getElementById("string").value;
    var n = document.getElementById("number").value;

    if(str.length >= n)
    {
        document.getElementById("output").innerHTML = str.substring(0,n) + str.substring(str.length-n,str.length);
    }else alert("string length must be greater or equal number!");

}