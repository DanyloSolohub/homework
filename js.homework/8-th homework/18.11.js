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

//
// const buton_left = document.getElementById(`left`)
// const buton_right = document.getElementById(`right`)
// const save = document.getElementById(`SAVE`)
//
// const areatext = document.getElementById(`text`)
//
//
// save.onclick = ev => {
//     let value = localStorage.getItem('array')
//
//     if (!value) {
//         value = ``;
//     }
//
//     value +=  areatext.value + `,`    ;
//
//      localStorage.setItem('array', value)
//
// }
//
// let a = localStorage.getItem(`array`)
// let b = a.split(`,`)
// for (let i = 0; i < b.length; i++) {
// buton_left.onclick = ev => {
//             if (i - 1 < 0) {
//                 i = b.length - 2
//             } else {
//                 i = i - 1
//             }
//             areatext.value = b[i]
// }
//     buton_right.onclick = ev => {
//         if (i + 1 > b.length - 2) {
//             i = 0
//         } else {
//             i = i + 1
//         }
//         areatext.value = b[i]
//     }
//  }





// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены
// данными объекта






const name = document.getElementById(`input1`)
const tel = document.getElementById(`input2`)
const gmail = document.getElementById(`input3`)
const firma = document.getElementById(`input4`)
const otdel = document.getElementById(`input5`)
const birthday = document.getElementById(`input6`)
const save_btn = document.getElementById(`save_btn`)



    let saveuser = function (i) {
        if (!localStorage.getItem(`name${i}`)) {
            localStorage.setItem(`name${i}`, name.value)
            localStorage.setItem(`tel${i}`, tel.value)
            localStorage.setItem(`gmail${i}`, gmail.value)
            localStorage.setItem(`firma${i}`, firma.value)
            localStorage.setItem(`otdel${i}`, otdel.value)
            localStorage.setItem(`birthday${i}`, birthday.value)
        }

}

let deleteuser = function (i){
    localStorage.removeItem(`name${i}`)
    localStorage.removeItem(`tel${i}`)
    localStorage.removeItem(`gmail${i}`)
    localStorage.removeItem(`firma${i}`)
    localStorage.removeItem(`otdel${i}`)
    localStorage.removeItem(`birthday${i}`)

    location.reload()
}

let createuserinfo = function (i) {

    const fieldset = document.createElement(`fieldset`)
    const legend = document.createElement(`legend`)
    const FIO = document.createElement(`textarea`)
    const tlf = document.createElement(`textarea`)
    const mail = document.createElement(`textarea`)
    const firma = document.createElement(`textarea`)
    const viddil = document.createElement(`textarea`)
    const birthday = document.createElement(`textarea`)
    const btn_delete = document.createElement(`button`)

    fieldset.style.width = `min-content`
    legend.innerText = `User ${i}`
    FIO.innerText = ` ${localStorage.getItem(`name${i}`)}`
    tlf.innerText = ` ${localStorage.getItem(`tel${i}`)}`
    mail.innerText = ` ${localStorage.getItem(`gmail${i}`)}`
    firma.innerText = ` ${localStorage.getItem(`firma${i}`)}`
    viddil.innerText = ` ${localStorage.getItem(`otdel${i}`)}`
    birthday.innerText = ` ${localStorage.getItem(`birthday${i}`)}`
    btn_delete.innerText = `DELETE USER`


        FIO.oninput = ev1 => {
            localStorage.getItem(`name${i}`)
            localStorage.setItem(`name${i}`, ev1.target.value)
        }
    tlf.oninput = ev1 => {
        localStorage.getItem(`tel${i}`)
        localStorage.setItem(`tel${i}`, ev1.target.value)
    }
    mail.oninput = ev1 => {
        localStorage.getItem(`gmail${i}`)
        localStorage.setItem(`gmail${i}`, ev1.target.value)
    }
    firma.oninput = ev1 => {
        localStorage.getItem(`firma${i}`)
        localStorage.setItem(`firma${i}`, ev1.target.value)
    }
    viddil.oninput = ev1 => {
        localStorage.getItem(`otdel${i}`)
        localStorage.setItem(`otdel${i}`, ev1.target.value)
    }
    birthday.oninput = ev1 => {
        localStorage.getItem(`birthday${i}`)
        localStorage.setItem(`birthday${i}`, ev1.target.value)
    }
    btn_delete.onclick = () => {
        deleteuser(i)
    }

    fieldset.appendChild(legend)
    fieldset.appendChild(FIO)
    fieldset.appendChild(tlf)
    fieldset.appendChild(mail)
    fieldset.appendChild(firma)
    fieldset.appendChild(viddil)
    fieldset.appendChild(birthday)
    fieldset.appendChild(btn_delete)

    document.body.appendChild(fieldset)

    if (localStorage.getItem(`name${i}`) == null || localStorage.getItem(`name${i}`) === `` ){
       fieldset.style.display = `none`

    }

}


for (let i = 1; i < 2 ; i++) {
    save_btn.onclick = () => {
         if (i >= 1) {
            saveuser(i)
            createuserinfo(i)
            i++
        }
    }
}

for (let i = 1; i < localStorage.length/4; i++) {
    createuserinfo(i)
}







