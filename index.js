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
        return N.toString()+outPut(N-1)
    }
}
console.log(outPut(5))
//  

// 4)
function palidrom(str){
    let lowerStr=str.replace(/\s+/g,'').toLowerCase()
    if (lowerStr.length<=1){
        return true
    } 
    if (lowerStr[0]!==lowerStr[lowerStr.length-1]){
        return false
    }
    return palidrom(lowerStr.slice(1,-1))
}
console.log(palidrom('adw'))
console.log(palidrom('ada'))

// 5)
function fastMult(a,b){
    if (b==0){
        return 1
    } else if (b/2==0){
        return fastMult(a*a,b/2)
    } else if (b/2!==0){
        return a*fastMult(a,b-1)
    }
}
console.log(fastMult(2,3))