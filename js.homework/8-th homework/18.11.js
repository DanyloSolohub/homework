//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу
// через некоторое время, введенный текст остался в textarea.


// const text = document.getElementById(`textarea`)
// text.value = localStorage.getItem(`text`)
// text.oninput = ev => {
//   localStorage.setItem(`text` , ev.target.value)
// }


//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами итп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные
// стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// const elem3 = document.getElementById(`input2`)
// const elem1 = document.getElementById(`area`)
// const elem2 = document.getElementById(`input1`)
//
//
// function datasave(elem,keyname) {
//
//     elem.value = localStorage.getItem(keyname)
//     elem.oninput = ev => {
//         localStorage.setItem(keyname , ev.target.value)
// }}
//
// datasave(elem1,`area`)
// datasave(elem2,`input1`)
// datasave(elem3,`input2`)


//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить"
// и они "фикисруются" (в хранилище), затем поредактировать их, затем еще
// поредактировать и возможно еще.....
// Требование : хранить историю своих изменений
// (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно
// перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки
// сохранить).
const buton_left = document.getElementById(`left`)
const buton_right = document.getElementById(`right`)
const save = document.getElementById(`SAVE`)

const areatext = document.getElementById(`text`)


save.onclick = ev => {
    let value = localStorage.getItem('array')

    if (!value) {
        value = ``;
    }

    value +=  areatext.value + `,`    ;

     localStorage.setItem('array', value)

}

let a = localStorage.getItem(`array`)
let b = a.split(`,`)
for (let i = 0; i < b.length; i++) {
buton_left.onclick = ev => {
            if (i - 1 < 0) {
                i = b.length - 1
            } else {
                i = i - 1
            }
            areatext.value = b[i]
}
    buton_right.onclick = ev => {
        if (i + 1 > b.length - 1) {
            i = 0
        } else {
            i = i + 1
        }
        areatext.value = b[i]
    }
 }








