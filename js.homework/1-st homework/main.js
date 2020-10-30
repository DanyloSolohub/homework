//console.log(5<6)
//console.log(5>6)
//console.log(5>=6)
//console.log(5===6)
//console.log(10===10)
//console.log(10<=10)
//console.log(10!==10)
//console.log(10>10)
//console.log(10<10)
//console.log(123!==123)
//console.log(123===123)
// console.log(parseInt("-7.875"))
// let a1 =Math.random()*(100)
// let a2 = a1.toFixed(1)
// console.log(+a2)
// let str = `Привет`;
// let num = 123;
// let flag = true;
// let txt = `true`;
// let a1 = Math.ceil(5+3)
// let a2 = Math.ceil(5-3)
// let a3 = Math.ceil(5*3)
// let a4 = Math.ceil(5/3)
// let a5 = Math.ceil(5%3)
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
//let a6 = Math.ceil(5%3)
//let a7 = Math.ceil(3%5)
//let a8 = Math.ceil( 5 + +`3`)
//let a9 = Math.ceil(`5` - 3)
//let a10 = Math.ceil(75 - `кг`)
//
//console.log(a6)
//console.log(a7)
//console.log(a8)
//console.log(a9)
//console.log(a10)
//let height = 23
//let width = 10
//let area = Math.ceil(height*width)
//console.log(area)
//
//let heightC = 10;
//let dC = 4;
//let V = Math.ceil(heightC*dC*3.14)
//console.log(V)
//let n = 3
//let m = 4
//let k = Math.ceil(Math.pow(n,2)+Math.pow(m,2))
//console.log(k)
//
//let str = alert(`SDR \n 18 \n footbal`  )

//let str = prompt(`Enter фамілію`)
    //let str2 = prompt(`Enter  імя` )
    //let str3 = prompt(`Enter  возраст` )
    //alert(`Доброго вечора ` + str+ ` ` + str2+  ` , мои поздравления что вам ` + str3  )

//let a =+prompt(`Enter first number`);
//let b =+prompt(`Enter second number`);
//let c =+prompt(`Enter third number`)
// if (a>b && a>c && b>c){
//    console.log(a,b,c)
//}
//    else if(c>b && c>a && b>a){
//    console.log(c,b,a)
//}
//    else if (b>a && b>c && a>c){
//console.log(b,a,c)
//}
//    else if(a>c && a>b && c>b) {
//    console.log(a,c,b)
//}
//    else if(c>a && c>b && a>b){
//   console.log(c,a,b)
//}
//    else if (b>c && b>a && c>a){
//    console.log(b,c,a)
//}



let trafficlightscolor =  prompt(`Введи колір світлофора`)
let isRoadclear = +confirm('тисни "ок" якщо машин немає')


if(trafficlightscolor.toLowerCase() === `зелений` && isRoadclear === 1 ) {
    alert(`іди`);
    console.log(`іди`);
}
else if(trafficlightscolor.toLowerCase() === `зелений` && isRoadclear === 0 ) {
    alert(`зачекай доки порушники проїдуть`);
    console.log(`зачекай доки порушники проїдуть`);
}
else if(trafficlightscolor.toLowerCase() === `жовтий` && isRoadclear === 1 ) {
    alert(`всерівно чекай`);
    console.log(`всерівно чекай`);
}
else if(trafficlightscolor.toLowerCase() === `жовтий` && isRoadclear === 0 ) {
    alert(`чекай`);
    console.log(`чекай`);
}
else if(trafficlightscolor.toLowerCase() === `червоний` && isRoadclear === 1) {
    alert(`надто рано - стій`);
    console.log(`надто рано - стій`);}
else if(trafficlightscolor.toLowerCase() === `червоний` && isRoadclear === 0) {
        alert(`стій`);
        console.log(`стій`);
} else{
    alert(`роби що хочеш світлофор не працює`);
    console.log(`do whatever u want`);
}








