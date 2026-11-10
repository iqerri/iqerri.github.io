 document.getElementById("btn").addEventListener("click", onclick)


function onclick () {
    let P = document.getElementById("amount").valueAsNumber
    let n = document.getElementById("years").valueAsNumber * 12
    let r = document.getElementById("rate").valueAsNumber / 12 / 100
    let A = P * r*(1+r)**n/((1+r)**n-1)
    let totalPay = A*n
    let totalInt = totalPay - P
    let result = "The monthly payment is $" + A.toFixed(2)
            + ".<br>The total payment is $" + totalPay.toFixed(2)
            + ".<br>The total interest is $" + totalInt.toFixed(2)
    document.getElementById("result").innerHTML = result
}