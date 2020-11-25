function typewriter(string,i) {
   return new Promise(resolve => {
    let letters = string.split(``)
    if(letters.length  <= i){
        return;
    }
    setTimeout(()=>{resolve(letters[i]);
    },Math.random()*1000)
    })
}
async function xXx() {
    for (let i = 0; i < 100; i++) {
    const value = await typewriter(`Hello World`,i)
    console.log(value)
}
}
xXx()
































