function checkMarks()
{
    var grade = document.getElementById("grade").value;
    var exam = document.getElementById("exam").checked;
    if(exam == true) 
    {
        if(grade >= 90 && grade <= 100)
        document.getElementById("output").innerHTML = "A+";
    }else
    {
        document.getElementById("output").innerHTML = "A-";
    }
    
}