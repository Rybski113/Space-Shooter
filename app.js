document.addEventListener('DOMContentLoaded', ()=> {

    const grid = document.querySelector('.grid');
    const invader = document.createElement('div')

    let platformCount = 5;
    let platforms = [];


    for ( let i = 0; i < 225; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
    }
    
    const squares = Array.from(document.querySelectorAll('.grid div')) 


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