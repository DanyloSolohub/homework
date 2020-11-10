//Давайте найдем сумму примитивных элементов нашего массива:[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

 let arr = [2,3,2, [2, 7, 8], [3, 4, 6, [5, [6, 7]]]]

function sumnumber(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            sum += array[i]
        }
        else if (typeof array[i] === "object"){
            for (const arra of array[i]) {
                if (typeof arra === "number")
                sum += arra;
                if (typeof arra  === "object") {
                    for (const arrEl of arra) {
                        if (typeof arrEl === "number")
                        sum += arrEl
                        if (typeof arrEl === "object"){
                            for (const lastblock of arrEl) {
                                sum += lastblock
                            }
                        }
                    }
                }
            }

        }
    }

return sum;
}

console.log(sumnumber(arr));



