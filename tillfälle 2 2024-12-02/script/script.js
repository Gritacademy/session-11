// 2) datatyper

let x
// number
x = -103 //integer/int , long/L
x = 0.03435 //float/f , double/D

//String
x = 'yxgatan 5b' // String/str
x = '$' // char/character

//boolean  true -> 1 false -> 0
x = false // boolean/bool

// undefined
x = undefined // inte definerat / obestämt
// null
x = null

// String + String = String  //konkatination
// String + number = String  //konkatination
// String + boolean = String  //konkatination
// String + undefined = String  //konkatination

// number + number =  number  //kalkylation
// number + boolean = number  //kalkylation
// number + undefined = RefersError

// boolean + boolean = number    //kalkylation
// boolean + undefined = number  //kalkylation

// 3) if satser
// condtion/regel ger boolean true eller false
//  > större än
//  < mindre än
//  >= större än & lika med
//  <= mindre än & lika med
//  == jämnför värdet
//  === jämnför värdet & datatypen
//  != inte lika med
//  !== inte lika värdet & datatypen

// if satsen

let svar = document.getElementById('input').valueAsNumber

if (5 * 5 == svar) alert('RÄTT')
else alert('FEL')




let vip = false
let age = 32
// 1) if sats serie
/* if (age >= 20) {
    console.log('systemet')
} else {
    console.log('barn')
}


if(vip == true){
    console.log("du är en kändis")
} else {
    console.log('du är en pleb ')
} */


// 2) if sats efter första sant
if (age >= 20) {
    console.log('systemet')
    if(vip == true){
        console.log("du är en kändis")
    } else {
        console.log('du är en pleb ')
    }
} else {
    console.log('barn')

}


// 2) if sats efter första sant
if (age >= 20) {
    console.log('systemet')
} else {
    console.log('barn')
    if(vip == true){
        console.log("du är en kändis")
    } else {
        console.log('du är en pleb ')
    }
}


//4 ) fler conditions samtidigt
// och &&
// eller ||
if (age >= 20  || vip == true) {
    console.log("YES")
} else {
    console.log("NO")
}


