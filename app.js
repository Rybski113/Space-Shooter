const grid = document.querySelector('.grid')
let currentShooterIndex = 202
const invader =  document.querySelector('.invader')


let width = 15

const tableEnd = [
    0,1,2,3,4,5,6,
    7,8,9,10,11,12,
    13,14,
]
function draw() {
    for (let i=0; i < tableEnd.length; i++) {
        squares[tableEnd[i]].classList.add('end')
    }
}

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

squares[currentShooterIndex].classList.add('shooter')



function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')

    switch(e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !==0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width -1) currentShooterIndex +=1
            break    
    }

    squares[currentShooterIndex].classList.add('shooter')
    
}

document.addEventListener('keyup', moveShooter)

function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')
        

    }
    switch(e.key) {
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 200)
     
    }

}
draw()

document.addEventListener('keydown', shoot )


let randomsquare = 