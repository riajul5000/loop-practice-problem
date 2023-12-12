var numbers = [23, 44, 45, 90, 398, 56, 89];
for(i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if( number > 100){
        continue;
    }
    console.log(number);
}

var friendsName = ['alex', 'michele', 'alisa', 'annie', 'samantha', 'jack'];
for(i = 0; i < friendsName.length; i++){
    var friend = friendsName[i];
    if(friend == 'annie'){
        continue;
    }
    console.log(friend);
}