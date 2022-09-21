function checkSimilar()
{
    var array1 = [];
    var array2 = [];
    var array = [];

    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;
    var a = document.getElementById("number4").value;
    var b = document.getElementById("number5").value;
    var c = document.getElementById("number6").value;

    array1.push(x);
    array1.push(y);
    array1.push(z);

    array2.push(a);
    array2.push(b);
    array2.push(c);

    for(i = 0; i < array1.length; i++) 
    {
        for(j = i; j < array1.length; j++) 
        {
            var result = true,
            array = array1[i];
            array1[i] = array1[j];
            array1[j] = array;

            for(k = 0; k < array1.length; k++) 
            {
                if(array1[k] !== array2[k]) 
                {
                    result = false;
                    break;
                }
            }
          
            if(result) 
            {
                document.getElementById("output").innerHTML = "Similar";
                return;
            }

          array1[j] = array1[i];
          array1[i] = array;
        }
      }
      document.getElementById("output").innerHTML = "Not similar";
}