/*Solução do site
    var var_name = 'abcd';
    var n = 120;
    this[var_name] = n;
    console.log(this[var_name])
*/


function getVarName()
{
    var varName = document.getElementById("varName").value;

    setVarName(varName);
}

function setVarName(varName)
{
    const VAR_NAME = varName;

    var obj = {
        [VAR_NAME]: "valor"
    };

    console.log(obj);
}
