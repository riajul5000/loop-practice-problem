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

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        // console.log(num1)
    }
    else{
        // console.log(num3)
    }
}
else{
    if(num2 > num3){
        // console.log(num2)
    }
    else{
        // console.log(num3)
    }
}

for(i = 0; i < 1000; i++){
    // console.log('I love you Athu');
}

for(i = 58; i <98; i++){
    // console.log(i);
}

var num23 = 412;
while(num23 < 456){
    // console.log(num23);
    num23 = num23 + 2;
}

var num56 = 581;
while(num56 < 623){
    // console.log(num56);
    num56 = num56 + 2;
}

var myLearning = ['Html', 'css', 'Tailwind', 'Daisy ui', 'javascript']; 
for(i = 0; i < myLearning.length; i++){
    var myLearning1 = myLearning[i];
    // console.log(myLearning1);
}

var num33 = 36;
while(num33 < 86){
    // console.log(num33);
    num33++;
    if(num33 > 44){
        break;
    }
}

var booksNamePrice = [150, 120, 400, 100, 230];
for(i = 0; i < booksNamePrice.length; i++){
    var booksNamePrice1 = booksNamePrice[i];
    if(booksNamePrice1 > 200){
        continue;
    }
    console.log(booksNamePrice1);
}