function sum()
{
    var sum = 0;
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    if(x == y)
    {
        sum = (parseInt(x) + parseInt(y))*3
        console.log(sum);
    }else{
        sum = parseInt(x) + parseInt(y);
        console.log(sum);
    }
}