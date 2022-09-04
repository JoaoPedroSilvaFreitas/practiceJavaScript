function checkNumber()
{
    var number = document.getElementById('number').value;
    console.log(number)
    if(number == randomInt){
        window.alert("Good Work");
    }else{
        window.alert("Not matched");
    }
}

var randomInt = Math.floor(Math.random() * 10) + 1;

