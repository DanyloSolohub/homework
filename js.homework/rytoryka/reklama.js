let red = document.getElementById(`red`)
let green = document.getElementById(`green`)
let blue = document.getElementById(`blue`)
let yellow = document.getElementById(`yellow`)
let h1 = document.getElementById(`h1`)

red.onmouseenter = (e) => {
    h1.innerText = `Привіт`
    red.onmouseleave = (ev) =>{
        h1.innerText = `Папа`
        console.log(`${Math.ceil(ev.timeStamp - e.timeStamp)/1000} секунд. Час проведений користувачем на червоному квадраті`)
        console.log(`${Math.ceil(e.timeStamp)/1000} секунд. Час проведений користувачем на сторінці перед наведенням на червоний квадрат`)
    }
}
green.onmousemove = (ev) => {
    const  redC = ev.clientX/2;
    const greenC  = ev.clientY/2;
    const  blueC = (redC + greenC)/4;
green.style.backgroundColor = `rgb(${redC},${greenC},${blueC})`
    green.onmouseleave = () =>{
       green.style.backgroundColor = `green`
    }
}
blue.onclick = () =>{
    blue.style.backgroundColor = `yellow`
if (blue.style.backgroundColor === `yellow`){
    blue.onclick = () =>{
    blue.style.backgroundColor = `green`
        if (blue.style.backgroundColor === `green`){
            blue.onclick = () =>{
                blue.innerText = ``
                blue.style.backgroundColor = `yellow`
                const y = document.createElement(`div`)
                y.style.width = `150px`
                y.style.height = `75px`
                y.style.backgroundColor = `blue`
                y.style.position = `absolute`
                blue.appendChild(y)
            }
        }
}

}

}


yellow.onclick = () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })
}
