function difference()
{
    var number = document.getElementById("number").value;
    if (number > 19)
    {
        console.log((number - 19)*3);
    }else{
        console.log(19 - number);
    }
}