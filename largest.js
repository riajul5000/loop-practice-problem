var num1 = 123;
var num2 = 79;
var num3 = 453;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
}else{
    if(num2 > num1){
        if(num2> num3){
            console.log(num2)
        }
    }
    else{
        console.log(num3);
    }
}