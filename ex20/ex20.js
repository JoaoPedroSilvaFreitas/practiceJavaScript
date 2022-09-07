function checkNegativeOrPositive()
{
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    if((x < 0 && y > 0) || x > 0 && y < 0) 
    {
        console.log("there is a negative number");
    }else console.log("there is no negative number");
}