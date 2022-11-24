const grid = document.querySelector('.grid')
let resultDisplay = document.getElementById('result')
let invader =  document.querySelector('.invader')
let currentShooterIndex = 202
let width = 15
let direction = 1
let goingRight = true

let score = 0

let aliensRemoved = []




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
            if (currentShooterIndex % width !==0)
             currentShooterIndex -=1
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
        case ' ':
            laserId = setInterval(moveLaser, 200)
     
    }
}

<<<<<<< HEAD

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

=======
document.addEventListener('keydown', shoot )
>>>>>>> a3727826686f55834c768e4825f3a06308aedf38
