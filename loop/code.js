// step 1: get the canvas element

let painter = document.getElementById("c").getContext("2d")
 painter.fillStyle =  "#FF0000"
// painter.fillRect(10,10, 20, 20)
// painter.fillRect(40,10, 20, 20)
// painter.fillRect(70,10, 20, 20)
// painter.fillRect(100,10, 20, 20)
// painter.fillRect(130, 10, 20, 20)

let i = 0
while (i < 5) {
    painter.fillRect(10+30*i, 10, 20, 20)
    i = i + 1
}




