//Ta certo mas o código ta muito feio...

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
} 

function daysToXmas(){
    const data = new Date();
    var days = 0;

    console.log(data);

    for (var month = data.getMonth(); month <= 11; month++)
    {
        if(month == data.getMonth())
        {
            for(var day = data.getDate(); day <= daysInMonth(month,data.getFullYear()); day++)
            {
                if(day == 25 && month == 11)
                    return days;

                days++;
            }
        }else
        {
            for(var day = 1; day <= daysInMonth(month,data.getFullYear()); day++)
            {
                if(day == 25 && month == 11)
                    return days;

                days++;
            }
        }  
    }
    
}

console.log("Days to xmas: " + daysToXmas());

/*Solução sujerida pelo site

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25) 
{
    cmas.setFullYear(cmas.getFullYear()+1); 
} 

var one_day=1000*60*60*24;

console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " days left until Christmas!");

*/