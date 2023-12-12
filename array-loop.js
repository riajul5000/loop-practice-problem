var numbers = [434, 34, 22, 90, 89];
for(var i = 0; i < 5; i++){
    var number = numbers[i];
    // console.log(number);
};

var numbers1 = [43,435,544,546,6,55,90,89];
var numbers2 = numbers1.push(23);
var numbers3 = numbers1.unshift(50)
for( i = 0; i < numbers1.length; i++){
    var number1 = numbers1[i];
    // console.log(number1);
}

var tableList = ['mouse', 'laptop', 'pen', 'book', 'usb drive', 'notebook'];
var tableList1 = tableList.push('security key');
var tableList2 = tableList.unshift('html book');
for(i = 1; i < tableList.length; i++){
    var table = tableList[i];
    console.log(table);
    if (i > 2){
        break;
    }
}
