const grid = document.querySelector('.grid')
let invader =  document.querySelector('.invader')
let currentShooterIndex = 202

let width = 15





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


document.addEventListener('keydown', shoot )

function randomInvader() {
    let randomSquare = squares[Math.floor(Math.random() * 15)]
   randomSquare.classList.add('invader')
   
   
   moveInvaders()

}
let showInvader = setInterval(randomInvader, 700)


function moveInvaders() {
   
    let currentInvaderIndex = document.querySelectorAll('.invader')
    console.log(currentInvaderIndex)

}
moveInvaders()

