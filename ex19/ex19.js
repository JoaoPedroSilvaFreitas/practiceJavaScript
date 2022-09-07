/*Solução do site

function testhundred(x) 
{
  return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

*/


function within20of100or400()
{
    var number = document.getElementById("number").value;
    if((number >= 80 && number <= 120) || (number >= 380 && number <= 420))
    {
        console.log("number is in range");
    }else console.log("number is not in range");
}