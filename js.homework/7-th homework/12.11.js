//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

 //const Btn =document.getElementById("MyBtn")
//  const Txt = document.getElementById("text")
// Btn.onclick = ev => {
//     Txt.hidden ?
//         Txt.hidden = false
//         :Txt.hidden = true
// }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// Btn.onclick = ev => {
//     Btn.style.display = `none`
// }


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const Btn =document.getElementById("MyBtn")
//
// Btn.onclick = ev => {
//     const Inpt =document.getElementById("MyInpt")
//  const value = Inpt.value
// if (value < 18 && value > 0 ){ alert(`too young`)}
// }

//- Создайте меню, которое раскрывается/сворачивается при клике

//  const A =document.getElementById("a0")
//  const Menu =document.getElementById("submenu")
// let flag = false
// A.onclick = ev => {
// if (flag){
//         Menu.style.display = `block`
//         flag = false
//     }
//     else{
//     Menu.style.display = `none`
//     flag = true
//     }
//
// }


//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

//
// let comment = [
//     {title : 'lorem0', body:'lorem ipsum dolo sit ameti0'},
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti1'},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti2'},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ameti3'}
// ]
//
// const content = document.getElementById(`content`)
//  comment.forEach(item => {
//   const div = document.createElement("div")
//   const h2 = document.createElement("h2")
//   const p = document.createElement("p")
//   const button = document.createElement("button")
//   button.innerText = `Hide`
//      h2.innerText = item.title
//      p.innerText = item.body
//      button.onclick = () => {
//       p.hidden
//            ?p.hidden = false
//            :p.hidden = true
//
//      }
//
//      div.appendChild(h2)
//      div.appendChild(p)
//      div.appendChild(button)
//      content.appendChild(div)
//  })


//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const btn = document.getElementById(`btn`)
// const input21 = document.getElementById(`input21`)
// const input22 = document.getElementById(`input22`)
// const input1 = document.getElementById(`input1`)
// const input2 = document.getElementById(`input2`)
//
//
// btn.onclick = ev => {
//     console.log(input1.value)
//     console.log(input2.value)
//     console.log(input21.value)
//     console.log(input22 .value)
// }

//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.


// const content = document.getElementById(`content`)
//
// function Ctable(rows,cols,tag){
//    const table = document.createElement(`table`)
//     for (let i = 0; i < rows ; i++) {
//         const tr = document.createElement(`tr`);
//         for (let j = 0; j < cols; j++) {
//        const td = document.createElement(`td`)
//             td.innerHTML = i.toString() + j.toString()
//             tr.appendChild(td)
//         }
//        table.appendChild(tr)
//     }
//     tag.appendChild(table)
// }
//
// Ctable(4,5,content)



//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.- Напишите «Карусель» –
// ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//     const content = document.getElementById(`content`)
// let Karusel = [
//     {
//         img_url: `https://i.pinimg.com/originals/f6/8b/fe/f68bfeece4b1ef192deb0c196fc789ed.jpg`
//     },
//     {
//         img_url: `https://bipbap.ru/wp-content/uploads/2019/05/01-1.jpg`
//
//     },
//     {
//         img_url: `https://veryimportantlot.com/cache/gallery-lot/25878/921378_-1280x828_width_50.jpg?_=`
//     }
//     ]
//
//     const img = document.createElement(`img`)
//     const leftbtn = document.createElement(`button`)
//     const rightbtn = document.createElement(`button`)
//
//     leftbtn.innerText = `left`
//     rightbtn.innerText = `right`
//     img.style.width = `600px`
//     img.style.height = `600px`
//
//     let i = 0
//     img.src = Karusel[i].img_url
//
//     content.appendChild(img)
//     content.appendChild(leftbtn)
//     content.appendChild(rightbtn)
//
//
//     leftbtn.onclick = ev => {
//       if ( i - 1 < 0 ){
//          i = Karusel.length - 1
//
//       }else{
//           i = i - 1
//       }  img.src = Karusel[i].img_url
//     }
//
//     rightbtn.onclick = ev => {
//         if ( i + 1 > Karusel.length - 1){
//             i = 0
//
//         }else{
//             i = i + 1
//         }  img.src = Karusel[i].img_url
//     }


//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badwords = ['ccc', 'xxx', `eee`, `🤞`]
//
// const Btn =document.getElementById("MyBtn")
// Btn.onclick = ev => {
//     const value =document.getElementById("MyInpt").value
//
//     const status = badwords.find(word => value.includes(word))
//     status ? alert(`Bad`) : alert('Good')
// }






























































































































































