function checkElement()
{
    document.getElementById("output").innerHTML = "";
    var array1 = [];
    var array2 = [];
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;

    array1.push(parseInt(a));
    array1.push(parseInt(b));
    array1.push(parseInt(c));
    array2.push(parseInt(d));
    array2.push(parseInt(e));
    array2.push(parseInt(f));

    for(i = 0; i < array1.length; i++)
    {
        for(j = 0; j < array2.length; j++)
        {
            if(array1[i] == array2[j])
            {
                document.getElementById("output").innerHTML = "there is at least one element that occurs in both arrays";
                return;
            }
        }
    }

    document.getElementById("output").innerHTML = "No element occurs in both arrays";
}


/*SOLUÇÃO DO SITE

function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++)
  {
    if (arra2.indexOf(arra1[i]) != -1) 
      return true;
  }
  return false;
}

*/