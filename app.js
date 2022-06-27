const grid = document.querySelector('.grid')
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
