// string type variable
var bottle = 'water';
var bottleColor = 'yellow';
// number type variable 
var sunglassPrice = 120;
var penColor = 'blue';
// boolean type variable 
var isExpensive = true;

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];
var item3 = tableItems[3];
tableItems[4] = 'notebook';
var penIndex = tableItems.indexOf('pen');
//push pop



//conditionals


var moneyGiven = 1000;
var orangeApplePrice = 700;
var totalRest = moneyGiven - orangeApplePrice;
// console.log(totalRest); 

var fruits = ['Apple', 'banana', 'orange'];
fruits[1] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
// console.log(fruits);

var num1 = 113;
var num2 = 79;
var num3 = 45;
 if(num1 > num2){
    console.log(num1);
    if(num2 > num1){
        console.log(num2);
    }else{
        console.log(num1);
    }
 }
 else{
    if(num2 > num3){
        console.log(num2)
    }
 }