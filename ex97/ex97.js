function palindrome()
{
    var str = document.getElementById("string").value;
    var array1 = str.split("");
    var array2 = str.split("");
    array2.reverse();

    for(i = 0; i < array2.length; i++)
    {
        if(array1[array1.length - i] != array2[i])
        {
            array1.push(array2[i]);
        }
        
    }

    str = array1.join("");

    document.getElementById("output").innerHTML = str;
}


/*SOLUÇÃO DO SITE

function build_Palindrome(new_str) {
  var flag;
  for (var i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}
*/
