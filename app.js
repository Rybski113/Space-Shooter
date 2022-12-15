document.addEventListener('DOMContentLoaded', ()=> {

    const grid = document.querySelector('.grid');
    const shooter = document.createElement('div');

 

    let platformCount = 5;
    let platforms = [];
    let width = 20;
    let currentShooterIndex = 389;


    for (let i = 0; i < 400; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
      }
    
    const squares = Array.from(document.querySelectorAll('.grid div'))

    squares[currentShooterIndex].classList.add('shooter')



    function moveShooter(e) {
        squares[currentShooterIndex].classList.remove('shooter');
        switch(e.key) {
           case 'ArrowLeft': 
           
           currentShooterIndex -=1;
           break
           case 'ArrowRight':
            
            currentShooterIndex +=1;
        }
        squares[currentShooterIndex].classList.add('shooter');
    }

  document.addEventListener('keydown', moveShooter)


  function shoot(e) {
      let laserId;
      let currentLaserIndex = currentShooterIndex;
        function moveLaser() {
            squares[currentLaserIndex].classList.remove('laser');
            currentLaserIndex -= width;
            squares[currentLaserIndex].classList.add('laser')
        }
        switch(e.key) {
            case ' ':
                laserId = setInterval(moveLaser,200)
        }
  }

  document.addEventListener('keydown', shoot)
  
    

    class Platform {
        constructor(newPlatformBottom) {
            this.bottom = newPlatformBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual)
        }
    }


    function createPlatforms() {
        for (let i=0; i < platformCount; i++) {
          let platformGap = 600 / platformCount;
          let newPlatformBottom = 100 + i * platformGap;
          let newPlatform = new Platform(newPlatformBottom);
          platforms.push(newPlatform);
        }
    }

    function movePlatforms() {
        
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'

                if (platform.bottom < 10) {
                    firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove('platform');
                    platforms.shift()
                    console.log(platforms)
                    let newPlatform = new Platform(600);
                    platforms.push(newPlatform)
                }
            })
        
    }

    function start() {
        createPlatforms()
        setInterval(movePlatforms, 60) 
        
    }
   // button later
    start()
})