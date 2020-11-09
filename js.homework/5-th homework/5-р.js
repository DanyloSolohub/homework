// class Toyota {
//     constructor(color,power,prise ) {
//         this.carcolor = color;
//         this.carpower = power;
//         this.carprise = prise
//     }
//     ride(){
//         console.log(`1/4 mile = 6.9s`)
//     }
// }
// let supra = new Toyota(`red`,999,100000)
//
// console.log(supra);
//
// supra.ride()

// class Html{
//     constructor(titleOfTag,action,attrs) {
//  this.titleOfTag = titleOfTag;
//  this.action = action;
//  this.attrs = attrs;
//
//     }
// }
//
// let title = `<a>`;
// let action = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`;
// let attibytes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
//
// ];
//
// let a = new Html(title,action,attibytes)
// console.log(a)
//
// let title1 = `<div>`;
// let action1 = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
// let attibytes1= [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
//
// ];
//
// let div = new Html(title1,action1,attibytes1)
// console.log(div)
//
//
//
// let title2 = `<h1>`;
// let action2 = `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.`;
// let attibytes2= [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//
// ];
//
// let h1 = new Html(title2,action2,attibytes2)
// console.log(h1)


// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car ={
//   model:`X`,
//   wyrobnyk:`Tesla`,
//   year:2019,
//   maxspeed:250,
//   engine: `electroengine`,
//     drivers: ` `,
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     },
//     info: function (){
//         console.log(`
//   model: ${this.model},
//   wyrobnyk: ${this.wyrobnyk},
//   year: ${this.year},
//   maxspeed:${this.maxspeed},
//   engine:${this.engine}
//   drivers: ${this.drivers}
//   `)
//     },
//     increaseMaxSpeed: function (newSpeed){
//       this.maxspeed += newSpeed;
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     addDriver : function (){
//       this.drivers = `name: Ivan, age: 27, experience:15`
//       }
// };
//
// car.drive();
// car.increaseMaxSpeed(50);
// car.changeYear(1800);
// car.addDriver()
// car.info();


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model,wyrobnyk,year,maxspeed,engine,drivers ) {
//         this.model =model || `X`;
//         this.wyrobnyk = wyrobnyk || `Tesla`;
//         this.year = year || 2019;
//         this.maxspeed = maxspeed || 250;
//         this.engine = engine || `electroengine`;
//         this.drivers = drivers || driver;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info (){
//        console.log(`
//         model: ${this.model},
//         wyrobnyk: ${this.wyrobnyk},
//         year: ${this.year},
//         maxspeed:${this.maxspeed},
//         engine:${this.engine}
//         `)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (driver){
//         this.drivers = driver
//     }
// }
//  let driver ={
//      name:`Ivan`,
//     age: 27,
//      experience:15
//
//  }
// let car  = new Car(`lanos`,`ukr`, 2000, 90,1.6, driver);
// console.log(car);
// car.drive();
// car.increaseMaxSpeed(150);
// car.changeYear(2020);
// car.addDriver(`Sanjok`)
// car.info();
// console.log(car);


//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Sinderela {
//     constructor(name,age,feetsize) {
//         this.name = name;
//         this.age = age;
//         this.feetsize = feetsize;
//     }
// }
//    let  Ivanka = new Sinderela(`Ivanka`, 19, 37);
//        let Diana = new Sinderela(`Diana`, 27, 38);
//     let Olga = new Sinderela(`Olga`, 22, 36);
//     let Vika = new Sinderela(`Vika`, 25, 35);
//     let Karina = new Sinderela(`Karina`, 15, 34);
//
// let girls = [Ivanka,Diana,Olga,Vika,Karina]
//
// class Prince {
//     constructor(name, age, shoose) {
//         this.shoose = shoose;
//         this.name = name;
//         this.age = age;
//
//         this.findMyPrincess = (babies) => {
//             for (const baby of babies) {
//                 if (baby.feetsize === this.shoose) {
//                     console.log(`${this.name} and ${baby.name} married`);
//                     break;
//                 }
//             }
//         }
//     }
// }
//
//   let Nikitka  = new Prince(`Nikitka`,17,34)
//
// Nikitka.findMyPrincess(girls)


//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Sinderela(name,age,feetsize) {
//         this.name = name;
//         this.age = age;
//         this.feetsize = feetsize;
// }
// let  Ivanka = new Sinderela(`Ivanka`, 19, 37);
// let Diana = new Sinderela(`Diana`, 27, 38);
// let Olga = new Sinderela(`Olga`, 22, 36);
// let Vika = new Sinderela(`Vika`, 25, 35);
// let Karina = new Sinderela(`Karina`, 15, 34);
// let girls = [Ivanka,Diana,Olga,Vika,Karina]
// function Prince(name, age, shoose) {
//     this.shoose = shoose;
//     this.name = name;
//     this.age = age;
//     this.findMyPrincess = (babies) => {
//         for (const baby of babies) {
//             if (baby.feetsize === this.shoose) {
//                 console.log(`${this.name} and ${baby.name} married`)
//                 break;
//                 }
//         }
//     }
// }
//
// let Nikitka = new Prince(`Nikitka`,17,34)
// Nikitka.findMyPrincess(girls)
