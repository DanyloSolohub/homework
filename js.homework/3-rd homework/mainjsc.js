//Task 2


//создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user1={
//  name: `Danylo`,
//  age: 18,
//  hascar: false
// };
// let user2={
//     nik: `Ivan_2000`,
//     city: `Lviv`,
//     haswife: true
// };
// let user3={
//    Hasjob : true,
//     childname: `Olga` ,
//    status : `active`
// };
// let user4 ={
//     skils:`footbal`,
//     number: 7,
//     team: `Barcelona`
// };
// let user5 ={
//     study:true,
//     studysince:2005,
//     scholarship: false
// };
//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user41 = {skils: [`footbal`,`tenis`], number: 7, team: `Barcelona`};
// let user31={Hasjob : true, childname: [`Olga`,`Kyrylo`] , status : `active`};
// let user21={nik: `Ivan_2000`, city: [`Lviv`,`Kyiv`], haswife: true}
// let user51 ={study:true, studysince:[2005,2015], scholarship: false}

//- При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (key in user1){
//     console.log(key)
// }
// for (key in user2){
//     console.log(key)
// }
// for (key in user3){
//     console.log(key)
// }
// for (key in user4){
//     console.log(key)
// }
// for (key in user5){
//     console.log(key)
// }
// for (key in man){
//     console.log(key)
// }
// for (key in user41){
//     console.log(key)
// }
// for (key in user31){
//     console.log(key)
// }
// for (key in user21){
//     console.log(key)
// }
// for (key in user51){
//     console.log(key)
// }

//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(man))
// console.log(Object.keys(user1))
// console.log(Object.keys(user2))
// console.log(Object.keys(user3))
// console.log(Object.keys(user4))
// console.log(Object.keys(user5))
// console.log(Object.keys(user51))
// console.log(Object.keys(user21))
// console.log(Object.keys(user31))
// console.log(Object.keys(user41))

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let arr = [
//     {model: `S`,power:700,year:2015 ,color:`red`},
//     {model: `X`,power:750,year:2017 ,color:`pink`},
//     {model: `Y`,power:525,year:2025 ,color:`blue`},
//     {model: `3`,power:450,year:2015 ,color:`purpure`},
//     {model: `camry`,power:300,year:2015 ,color:`green`},
//     {model: `devil sixteen`,power:2000,year:2021,color:`white`},
//     {model: `gt2rs`,power:999,year:2019 ,color:`darkred`},
//     {model: `911 turbo s`,power:666,year:1970 ,color:`yellow`},
//     {model: `gt4`,power:800,year:2016 ,color:`violet`},
//     {model: `ff`,power:777,year:2010 ,color:`gold`},
// ];

//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

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
// ]

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// let i = 0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++
// }

// for (let j = 0; j < arr.length; j++) {
//     const arrElements = arr[j];
//     console.log(arrElements);
//
// }

// for (const arrElement of arr) {
//     console.log(arrElement)
// }


//- взять объекты из задания 1 и превратить каждый в json.
//- взять json из задания 11 и превратить их обратно в объекты

// let Myjson = JSON.stringify(user1);
// console.log(Myjson);
//
// let Jsonback = JSON.parse(Myjson);
// console.log(Jsonback);


// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .


// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(JSON.stringify(arrElement));
// }


    // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     newArray.push(JSON.stringify(arrElement));
// }
// console.log(newArray);


//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//      { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } },
//      {name: 'ryk',skills: [`footbal`,`tenis`], number: 7, team: `Barcelona`},
// ]

// for (const user of users) {
//     console.log(user.name);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив


// let newArr = [];
//
//
// for (const user of users) {
//     console.log(user.name);
//     for (const skill of user.skills) {
//         newArr.push(skill);
//     }
// }
//
// console.log(newArr);



//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

//console.log(`${users[4].age} ${users[4].status} `);


//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let clean = [];
//
// for (const user of users) {
// clean.push(user.address)
// }
// console.log(clean);



//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.


// for (let i = 0; i<users.length; i++){
//     const user = users[i];
//     const div = document.createElement("div");
//     let address = ` `;
//     for (const address1 in user.address) {
//         address = address + ` ` + user.address[address1]
//     }
//     div.innerText = `${user.name}  ${user.age} ${user.status} ${address} `;
//     document.body.appendChild(div);
//}


// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// for (let i = 0; i<users.length; i++){
//     const user = users[i];
//     const div = document.createElement("div");
//     const h2 = document.createElement("h2");
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");
//     const p3 = document.createElement("p3");
//     let address = ` `;
//     for (const address1 in user.address) {
//         address = address + ` ` + user.address[address1]
//     }
//     h2.innerText = user.name;
//     p1.innerText = user.age;
//     p3.innerText = user.status;
//     p2.innerText = address;
//
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     document.body.appendChild(div);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


// for (let i = 0; i<users.length; i++){
//     const user = users[i];
//     const div = document.createElement("div");
//     const name = document.createElement("h2");
//     const age = document.createElement("p");
//     const status = document.createElement("p");
//     const address = document.createElement("div");
//
//     for (const item in user.address ) {
//        const temp = document.createElement("div");
//        temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//     }
//
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// }
//




















