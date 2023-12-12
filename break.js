for(var i= 1; i <= 20; i++) {
    // console.log(i);
    if( i > 5){
        break;
    }
}

var roastGiven = 0;
while(roastGiven < 10) {
    // console.log('roast den, gift ansi');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}


for( i= 1; i <= 20; i++){
    // console.log(i)
    if(i > 4){
        break;
    }
}

// var myGadget = ['iphone', 'laptop', 'headphone sony', 'android', 'mouse'];
// var i = 0;
// while(i < myGadget.length){
//     var gadget = myGadget[i];
//     if(gadget == 'android'){
//         break;
//     }
//     myGadget++;
//     console.log(gadget);
// }

var myGadget1 = ['iphone', 'laptop', 'headphone sony', 'android', 'mouse'];
for(i = 0; i < myGadget1.length; i++){
    var gadget1 = myGadget1[i];
    if(gadget1 == 'headphone sony'){
        break;
    }
    // console.log(gadget1);
}


var numbers = [23, 44, 45, 90, 398, 56, 89];
for(i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if( number > 100){
        break;
    }
    console.log(number);
}