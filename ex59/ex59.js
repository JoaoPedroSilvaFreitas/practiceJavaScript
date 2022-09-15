function firstHalf()
{
    var str = document.getElementById("string").value;

    if(str.length % 2 == 0)
    {
        document.getElementById("output").innerHTML = str.substring(0, str.length/2);
        //também poderia ter usado .slice(0, str.length / 2);
        
    }else alert("string with odd length");
}