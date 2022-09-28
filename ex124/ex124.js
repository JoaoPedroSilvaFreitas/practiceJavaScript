function check()
{
        var x = parseInt(document.getElementById("x").value);
        var y = parseInt(document.getElementById("y").value);

        if((x != 1 && x != 0) || (y != 1 && y != 0))
        {
                alert("only 0 or 1");
                return;
        }else
        {
                if(!(Boolean(x) || Boolean(y)))
                {
                        document.getElementById("output").innerHTML = "True";
                }else document.getElementById("output").innerHTML = "False";
        }

        
}

/*SOLUÇÃO DO SITE
function test_logical_Nor(a, b) 
{
  return (!a && !b)
}
*/