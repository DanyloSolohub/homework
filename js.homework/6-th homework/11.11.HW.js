//-- при помощи метода sort и колбека  отсортировать массив.
// let arr = [1,12,3,4,7,9,10,43,56,92,100,33,21,25,88]

// let sort = arr.sort((a, b) => {
//     return a-b
//     })
// console.log(sort);


//-- при помощи filter получить числа кратные 3 && 10

// let filter = arr.filter(value => {
//    return value%3 === 0
//
// })
//
// console.log(filter);
//
//
// let filter1 = arr.filter(value => {
//     return value%10 === 0
//
// })
//
// console.log(filter1);
//
//
// console.log(arr);

//- перебрать (проитерировать) массив при помощи foreach()

// arr.forEach((value, index, array) => {
//     console.log(value)
// })

// перебрать массив при помощи map() и получить новый массив
// в котором все значения будут в 3 раза больше

// let map = arr.map((value, index) => {
//     return value * 3
// })
// console.log(map)

// создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.

//let arr = [`Ira`,`Ford`,`Apple`,`Notebook`,`Lamp`,`Dog`,`Cat`,`Human`,`Pilot`,`Sofa`,`Car`,`Ferrari`]

// let sort = arr.sort()
// console.log(sort)
//
// let sort1 = arr.sort((a, b) => {
//     return -1
// })
// console.log(sort1)

//отфильтровать слова длиной менее 4х символов

// let filter = arr.filter((value  , index, array) => {
//   return value.length >= 4
// })
// console.log(filter)

//- перебрать массив при помощи map() и получить новый массив
// в котором все значения будут со знаком "!" в конце

// let map = arr.map((value) => {
//     return value + `!`
// })
// console.log(map)
//


//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 31, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

//- відсортувати його за  віком (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(sort);

// let sort1 = users.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(sort1);


//- відсортувати його за кількістю знаків в імені
// (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => {
//    return a.name.length - b.name.length
// })
// console.log(sort)
//
// let sort1 = users.sort((a, b) => {
//     return b.name.length - a.name.length
// })
// console.log(sort1)


//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує
// унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let a = JSON.parse(JSON.stringify(users));
//
// let userswithid = a.map(user => {
//     user.id = user.name.length * Math.pow(user.age,2)
//     return user
// })
//console.log(userswithid)


// - відсортувати його за індентифікатором

// let usersidsort = userswithid.sort((a, b) => {
//     return b.id - a.id
//
// })
//
// console.log(sort)
//

// наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(N1,N2,callback) {
//     return callback(N1,N2)
//
// }
//
// console.log(calculator(10, 20, (N1, N2) => {
//     return N1 * N2
// }));



































