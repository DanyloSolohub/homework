
//- створити функцію яка виводить масив

// let arr = [1,2,3,4,5,6,7,8,9,0]
// function showMessage(array) {
//     // for (let i = 0; i < 10; i++) {
//     //     console.log(arr[i]);
//     // }
//     // for (const number of arr) {
//     //     console.log(number);
//     // }
//     console.log(array);
//
//
// }
// showMessage(arr)

//-- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

//
//  function showMessage() {
//      let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = parseInt(Math.random() * (100))
//         console.log(arr[i]);
//     }
// }
// showMessage()

//- створити функцію яка приймає три числа та виводить та повертає найменьше/найбільше.

// let a =+prompt(`Enter first number`);
// let b =+prompt(`Enter second number`);
// let c =+prompt(`Enter third number`)
//
// function funk(){
//     let max = Math.max(a,b,c);
//     console.log(max);
// }
// funk()
//
// function funk1(){
//     let min = Math.min(a,b,c);
//     console.log(min);
// }
// funk1()

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


// function sort(){
//     let arr = arguments;
//     let min = arr[0];
//     let max = arr[0];
//
//   for (let i = 0; i < arr.length; i++){
//     for (let item of arr) {
//         if (item < min){ min = item }
//         if (item > max) { max = item }
//        }
//       console.log(`max`,max);
//     } return min;
//
// }
// let min = sort(1,2,3,4,5,6,7,8,9,30)
// console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- `)
// console.log(`min`,min)

//- створити функцію яка повертає найбільше/найменше число з масиву

// let arr = [10,2,3,4,-5,6,7,8,9,0]
//
// function showMessage(array) {
//     let min = array[0]
//
//     for (const item of array) {
//         if (item < min){ min = item }
//               }
//          console.log(`min`,min);
//         return min;
//
// }
// console.log(showMessage(arr));
//
//
// function showMessage1(array1) {
//     let max = array1[0]
//     for (const item of array1) {
//
//         if (item > max) { max = item }
//     }
//     console.log(`max`,max);
//     return max;
//
// }
// console.log(showMessage1(arr));


// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

//        function sumarr(arr){
//     let sum = 0
//            for (let i = 0; i < arr.length; i++) {
//                sum += arr[i]
//            }
//            console.log(`result`,sum);
//            return sum;
//        }
//
//
//      console.log(sumarr([1, 1, 2, 3, 5, 8, 13, 21]));



//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

        //
        // function midvalue(arr){
        //     let sum = 0
        //     for (let i = 0; i < arr.length; i++) {
        //         sum = sum + arr[i]/arr.length
        //     }
        //     console.log(`result`,sum);
        //     return sum;
        // }
        // console.log(midvalue([1, 1, 2, 3, 5, 8, 13, 21]));


// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

   //let arrobj = [{ffe:2,dwed:`12`},{fewe:`eferf`},{fwvef:3},{thnnyr:2,dwed:`12`},{efvev:2,dwed:`12`},{veavav:2,dwed:`12`}]
//     function anyarr(array){
//     let k = 0
//             for (const item of array) {
//             if (typeof item === `object`){
//                 k++;
//             }   }
//             return k;
//     }
//
// console.log(anyarr(arrobj));


//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function anyarr(array){
//     let k = 0
//     for (const item of array) {
//         if (typeof item === `object`){
//             for (const key in item) {
//                 k++;
//             }
//
//         }   }
//     return k;
// }
//   console.log(anyarr(arrobj));


// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let arr = [1,2,3,4,5]
// let rra = [5,4,3,2,1]
//
// function sumi(array,array1){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] + array1[i])
//
//     }
//
//     return result;
// }
//
// console.log(sumi(arr, rra));



//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function funk(array,i){
//     let arr = array[i];
//     array[i] = array[i+1]
//     array[i+1] = arr
//     return arr
// }
//
// console.log(funk([1,2,3,4,5,6,7,8,9,0], 5));




//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// function funk (arr) {
//     let arr3 = [];
//     for (let i = arr.length-1; i >= 0; i--)
//         if (arr[i] !== 0) {
//               arr3.unshift(arr[i])
//         }
//     else{
//         arr3.push(arr[i])
//         }
//     return arr3
// }
//
// console.log(funk([77,1,3,4,0,5,0,6,0,7,0,8,9,0]));


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function funk(tag , text) {
//     let div = document.createElement(tag);
//     div.innerHTML = text;
//     document.body.appendChild(div);
// }
// funk('div' , 'Hello owu ');

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function funk(tag , text) {
//     let div = document.createElement(arguments[0]);
//     div.innerHTML = arguments[1];
//     document.body.appendChild(div);
// }
// funk('div' , 'Hello owu ');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let arr = [
//     {model: `S`,power:700,year:2015 ,color:`red`,driver:{name:`jordan`,age:30,experience:25}},
//     {model: `X`,power:750,year:2017 ,color:`pink`,driver:{name:`Michail`,age:20,experience:5}},
//     {model: `Y`,power:525,year:2025 ,color:`blue`,driver:{name:`vadim`,age:15,experience:16}},
//     {model: `3`,power:450,year:2015 ,color:`purpure`,driver:{name:`Metelkin`,age:32,experience:3}},
//     {model: `camry`,power:300,year:2015 ,color:`green`,driver:{name:`djusha`,age:39,experience:20}},
//     {model: `devil sixteen`,power:2000,year:2021,color:`white`,driver:{name:`I`,age:33,experience:27}},
//     {model: `gt2rs`,power:999,year:2019 ,color:`darkred`,driver:{name:`turbo`,age:26,experience:17}},
//     {model: `911 turbo s`,power:666,year:1970 ,color:`yellow`,driver:{name:`gena`,age:35,experience:15}},
//     {model: `gt4`,power:800,year:2016 ,color:`violet`,driver:{name:`stas`,age:27,experience:10}},
//     {model: `ff`,power:777,year:2010 ,color:`gold`,driver:{name:`nikita`,age:20,experience:5}},
// ];
//
//  function funk(idtag,arrcar){
//      let block = document.getElementById(idtag)
//      let ul = document.createElement(`ul`)
//      for (let i = 0; i < arrcar.length; i++) {
//          const car  = arrcar[i];
//         let li = document.createElement(`li`)
//         li.innerHTML = `model: ${car.model}`
//         ul.appendChild(li)
//      }
//     block.appendChild(ul)
//  }
//  funk(`carsblock` , arr)


//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function funk(array1,array2) {
//     let users = JSON.parse(JSON.stringify(array1));
//     let cities = JSON.parse(JSON.stringify(array2));
//
//     for (const user of users) {
//         for (const city of cities) {
//             if (city.user_id === user.id){
//                 user.address = city
//             }
//         }
//     }
//     return users
// }
//
// console.log(funk(usersWithId, citiesWithId));


//===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES , если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

//  let N = +prompt()
//
// for (let i=0;i<N;i++) {
//
//     if (N > 0 && i === Math.log2(N)  ) {
//           console.log(`YES, степінь:`,i)
//         break;
//     }
//
//     else {
//         console.log(`No`)
//     }
//     }


//
// function check(n) {
//     while (n > 1) {
//         n /= 2;
//     }
//     return n < 1 ? 'NO' : 'YES';
//
// }
//
// console.log(check(12));












