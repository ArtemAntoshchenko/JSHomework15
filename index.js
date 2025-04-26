// 1)
function rec(number){
    if (number<0){
        return -1
    } else if (number==1){
        return number
    } else {
        return number*rec(number-1)
    }
}
console.log(rec(5))

// 2)
function sumNum(i){
let numToStr=String(i)
if (numToStr.length==1){
    return +numToStr
} else {
    return +numToStr[0]+sumNum(numToStr.slice(1))
}
}
console.log(sumNum(544))

// 3)
//                              не смог
function outPut(N){
    if (N==1){
        return N
    } else {
        return N.toString() + outPut(N - 1)
    }
}
console.log(outPut(5))
//  

// 4)

