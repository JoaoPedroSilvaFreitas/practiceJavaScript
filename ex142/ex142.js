function simplifyPath()
{
    var path = document.getElementById("path").value.split("/"),
    newPath = [],
    length = 0;
    for (var i = 0; i < path.length; i++) 
    {
        var aux = path[i];
        if (aux == '.' || aux == '' || aux == '..') 
        {
          if (aux == '..' && length > 0) 
          {
            length--;
          }
          continue;
        }
        newPath[length++] = aux;
    }

    if(length == 0) 
    {
      document.getElementById("output").innerHTML = "/";
      return;
    }

    var output = newPath.join("/");

    document.getElementById("output").innerHTML = output;
}


