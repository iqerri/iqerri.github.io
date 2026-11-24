// step 1: get the canvas element

let painter = document.getElementById("c").getContext("2d")
 painter.fillStyle =  "#FF0000"
 
 //painter.fillRect(10,10, 20, 20)
 //painter.fillRect(40,10, 20, 20)
 //painter.fillRect(70,10, 20, 20)
 //painter.fillRect(100,10, 20, 20)
 //painter.fillRect(130, 10, 20, 20)



let pattern_id = 1
setInterval(draw, 2000) 

function draw() {
    painter.fillStyle = "#000000"
    painter.fillRect(0, 0, 400, 400)
    painter.fillStyle = "#FF0000"
    if (pattern_id === 7) {
        pattern_id = 1
    }

    if (pattern_id ===1) {
        draw_a_row()
        ++pattern_id
    
    } else if (pattern_id === 2){
        draw_matrix()
        ++pattern_id
    
    } else if (pattern_id === 3) {
        draw_a_column()
        ++pattern_id
    } else if (pattern_id === 4) {
        draw_diagonal()
        ++pattern_id
    } else if (pattern_id === 5) {
        draw_upward_diagonal()
        ++pattern_id
    } else if (pattern_id === 6) {
        draw_x()
        ++pattern_id
    }
}

function draw_matrix () {
    let N = 13
    let i = 0
    for (i = 0; i < N; ++i) {

        for (let j = 0; j < N; ++j) {
            painter.fillRect(10+30*j, 10+i*30, 20, 20)
         }

    }
}

function draw_a_row() {
    for (let i = 0; i < 13; ++i) {
        painter.fillRect(10+i*30, 10, 20, 20)
    }
}

function draw_a_column() {
    let i = 0
    while (i < 13) {
        painter.fillRect(10, 10+i*30, 20, 20)
        ++i
    }
}

function draw_diagonal() {
    for(let i = 0; i < 13; ++i){
        painter.fillRect(10+i*30, 10+i*30, 20, 20)
    }
}

function draw_upward_diagonal() {
    for(let i = 0; i < 13; ++i){
        painter.fillRect(10+i*30, 370-i*30, 20, 20)
    }
}

function draw_x() {
    draw_diagonal()
    draw_upward_diagonal()
}
