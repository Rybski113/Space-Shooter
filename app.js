document.addEventListener('DOMContentLoaded', ()=> {

    const grid = document.querySelector('.grid');
    const invader = document.createElement('div')
    const shooter = document.createElement('div');

    let platformCount = 5;
    let platforms = [];
    
    let shooterLeftSpace = 65;
    let startpoint = 10;
    let shooterBottomSpace = startpoint;

    function createShooter() {
        grid.appendChild(shooter);
        shooter.classList.add('shooter');
        shooterLeftSpace = platforms[0].left;
        shooter.style.left = shooterLeftSpace + 'px'
        shooter.style.bottom = shooterBottomSpace + 'px'
    }

    

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
        createShooter()
        setInterval(movePlatforms, 60) 
    }
   // button later
    start()
})