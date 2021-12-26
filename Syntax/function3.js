console.log(Math.round(1.6)); // 2 반올림
console.log(Math.log10(10));  // 1 상용로그

function sum(first, second) { // parameter
    return first+second;
}

console.log(sum(3,4)); // argument

a = parseInt(process.argv.slice(2));
b = parseInt(process.argv.slice(3));

console.log(sum(a,b));