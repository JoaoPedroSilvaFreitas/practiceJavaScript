function checkNumber()
{
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    if((x == 50 || y == 50) || (parseInt(x) + parseInt(y) == 50))
    {
        console.log("True")
    }else console.log("False")
}