function removeFirstLast()
{
    var str = document.getElementById("string").value;

    document.getElementById("output").innerHTML =  str.substring(1,str.length-1);

}