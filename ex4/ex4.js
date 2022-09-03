var x = 5;
var y = 6;
var z = 7;
var area

/* Usando uma tal de formula de heron que o site sujeriu
var s = (x + y + z)/2;
var area =  Math.sqrt(s*((s-x)*(s-y)*(s-z)));
console.log(area);
*/


if((x > y) && (x > z)){

    area = (y*z)/2

}else if((y > x) && (y > z)){

    area = (x*z)/2

}else area = (x*y)/2   

console.log(area)