document.getElementById("btn").addEventListener("click", onclick)

function onclick(){
    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let num3 = document.getElementById("num3").valueAsNumber

    let max;
    if (num1>=num2 && num1>=num3) {
        max = num1
    } else {
        if (num2>=num1 && num2>=num3) {
            max = num2
        }else {
            if (num3>=num2 && num3>=num1)
                max = num3
        }
    }
    document.getElementById("result").innerHTML = max
}
