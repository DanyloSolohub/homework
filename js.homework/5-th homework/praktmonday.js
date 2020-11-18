//Давайте найдем сумму примитивных элементов нашего массива:[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

 let arr = [2,3,2, [2, 7, 8], [3, 4, 6, [5, [6, 8]]]]

function sumnumber(array) {
    let sum = 0;
    for (const arrayElement of array) {
        if (Array.isArray(arrayElement)){
            sum += sumnumber(arrayElement)
        }
        else {
            sum  += arrayElement
        }
        }
    return sum;
    }

console.log(sumnumber(arr));


