function rearrangeChars()
{
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;
    var aux = [];


    if(str1.length == str2.length)
    {
        for(i = 0; i < str1.length; i++)
        {
            for(j = 0; j < str2.length; j++)
            {
                if(str1[i] == str2[j])
                {
                    aux.push(str1[i])
                    break;
                }
            }
        }

        if(aux.length == str2.length)
        {
            document.getElementById("output").innerHTML = "It is possible to rearrange string";
        }

    }else document.getElementById("output").innerHTML = "Not possible to rearrange string";

}


/*SOLUÇÃO DO SITE

function rearrangement_characters(str1, str2) {

  var first_set = str1.split(''),
      second_set = str2.split(''),
      result = true;

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

*/