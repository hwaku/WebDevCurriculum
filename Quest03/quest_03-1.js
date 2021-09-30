// 1번째 방법
let sum;
let count = 0;
let star = '';

sum = prompt();

let starStamp = function (){
    for(let i=0; i<sum; i++){
        for(let j=1; j<=(i*2)+1; j++){
            star += '*';
        }
        star += "\n";
    }
    console.log(star);
}

starStamp();

// 2번째 방법
// let sum;
// let count = 1;
// let starTotal = '';
//
// sum = prompt();
//
// let starStamp = function (){
//     for(let i=0; i<sum; i++){
//         for(let j=0; j<=i; j++){
//             if(j === 0){
//                 starTotal = '*'.repeat(count);
//             }else{
//                 starTotal = '*'.repeat(count);
//             }
//         }
//         count += 2;
//         console.log(starTotal)
//     }
// }
//
// starStamp();