function is_lower_triangular()
{
    if(matrix.length <= 0)
    {
        alert("Matrix is empty");
        return;
    }

    for(i = 0; i < matrix.length; i++)
    {
        for(j = i; j < matrix.length; j++)
        {
            if(i != j && matrix[i][j] != 0)
            {
                document.getElementById("output").innerHTML = "non lower triangular";
                return;
            } 
        }
    }
    document.getElementById("output").innerHTML = "is lower triangular";
}

function addToMatrix()
{
    var number = parseInt(document.getElementById("number").value)
    matrix[line][column] = number;
    
    if(column == size-1)
    {
        if(line == size-1)
        {
            line = 0;
            document.getElementById("i").innerHTML = "Full";
            document.getElementById("j").innerHTML = "Full";
            return;
        }else line++;

        column = 0;
    }else column++;

    document.getElementById("i").innerHTML = line;
    document.getElementById("j").innerHTML = column;
}

function createMatrix()
{
    document.getElementById("i").innerHTML = line;
    document.getElementById("j").innerHTML = column;
    matrix = [];
    size = parseInt(document.getElementById("size").value);

    for(i = 0; i < size; i++)
    {
        let array = [];
        for(j = 0; j < size; j++)
        {
            array.push(0);
        }
        matrix.push(array);
    }

    document.getElementById("i").innerHTML = line;
    document.getElementById("j").innerHTML = column;
    //document.getElementById("check").style.display = "visible";
}

var size = 0;
var matrix = [];
var line = 0;
var column = 0;

