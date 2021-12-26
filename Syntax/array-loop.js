var number = [1, 400, 12, 34, 5];
var total = 0;
var i = 0;

while(i<number.length) {
    total += number[i];
    i++;
}

console.log(`Total is ${total}!`);

for(i=0; i<number.length; i++) {
    console.log(number[i]);
}