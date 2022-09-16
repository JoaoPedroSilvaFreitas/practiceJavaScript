function moveLastChar()
{
    var str = document.getElementById("string").value;

    if(str.length >= 3)
    {
        // tambem funciona como .slice -> str.slice(-3) + str.slice(0, -3);
        document.getElementById("output").innerHTML = str.substring(str.length-3,str.length) + str.substring(0,str.length-3);
    }else alert("string length must be greater or equal 3!");

    

}