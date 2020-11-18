//let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// let filter0 = cars.filter((value, index, array) =>{
//     return value.volume >=3
// } )
//
//
// let filter1 = cars.filter((value, index, array) => {
//     return value.volume = 2
// })
//
// let filter2 = cars.filter((value, index, array) => {
//     return value.producer === "mercedes"
// })
//
// let filter3 = cars.filter((value, index, array) => {
//     return value.producer === "mercedes" && value.volume >=3
// })
//
// let filter4 = cars.filter((value, index, array) => {
//     return value.producer === "subaru" && value.volume >=3
// })
// console.log(filter4)

// let filter5 = cars.filter((value, index, array) => {
//     return value.power >=300
// })


// let filter5 = cars.filter((value, index, array) => {
//     return value.producer === "subaru" && value.power >=300
// })

// let filter6 = cars.filter((value, index, array) => {
//     return value.engine.includes("ej")
// })

// let filter7 = cars.filter((value, index, array) => {
//     return value.engine.includes("ej") && value.producer === "subaru" && value.power >=300
// })

// let filter8 = cars.filter((value, index, array) => {
//     return value.volume <= 3 && value.producer ==="mercedes"
// })

// let filter9 = cars.filter((value, index, array) => {
// return value.volume >=2 && value.power >= 250
// })

// let filter10 = cars.filter((value, index, array) => {
//     return value.power >=250 && value.producer === "bmw"
// })


let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}]

// let sort0 = usersWithAddress.sort((a, b) => {
//     return a.id - b.id
// })
//
// let sort1 = usersWithAddress.sort((a, b) => {
//     return b.id - a.id
// })
//
// let sort2 = usersWithAddress.sort((a, b) => {
//     return a.age - b.age
// })
//
// let sort3 = usersWithAddress.sort((a, b) => {
//     return b.age - a.age
// })

// let sort4 = usersWithAddress.sort((a, b) => {
//     return a.name.length - b.name.length
// })
//
//
// console.log(sort4)

// let sort4 = usersWithAddress.sort((a, b) => {
// })
// console.log(sort4)

//
//
// let sort5 = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// console.log(sort5)
//
//
//


// let sort6 = usersWithAddress.filter((value, index) => {
//     return value.age < 30
// })
// console.log(sort6);

// let sort7 = usersWithAddress.filter((value, index) => {
//     return value.status === false
// })
// console.log(sort7);

// let sort8 = usersWithAddress.filter((value, index) => {
//     return value.status === false && value.age < 30
// })
// console.log(sort8);

//  let sort8 = usersWithAddress.filter((value, index) => {
//     return value.address.number % 2 === 0
// })
// console.log(sort8);








