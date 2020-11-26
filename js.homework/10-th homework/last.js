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
async function xXx(str) {
    for (let i = 0; i < str.length; i++) {
    const value = await typewriter(str,i)
    console.log(value)
}
}
xXx(`Hello World`)
































