console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
{
    var data = new Date(year, 0, 1);

    if ( data.getDay() == 0 )
        console.log("1st January is being a Sunday  "+year);
}
console.log('--------------------');