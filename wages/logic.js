document.querySelector("#btn").addEventListener("click", onclick)
document.body.addEventListener("keydown", onEnter)

function onEnter(e) {
    if (e.key==="Enter") {
        onclick();
    }
        
}

function onclick() {
    let normal_hours = document.getElementById("normal_hours").valueAsNumber
    let normal_rate = document.getElementById("normal_rate").valueAsNumber
    let overtime_rate = document.getElementById("overtime_rate").valueAsNumber
    let hours_worked = document.getElementById("hours_worked").valueAsNumber

    let result
    if(hours_worked > normal_hours) {
        result = (hours_worked - normal_hours) * overtime_rate + normal_hours*normal_rate
    }  else {
        result = hours_worked*normal_rate
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + " dollars"
}
