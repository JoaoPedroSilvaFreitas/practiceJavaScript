function difference()
{
    var number = document.getElementById("number").value;
    if (number > 13)
    {
        console.log((number - 13)*2);
    }else{
        console.log(13 - number);
    }
}