document.addEventListener('DOMContentLoaded', ()=> {

    const grid = document.querySelector('.grid');
    let platformCount = 5;


    class Platform {
        constructor(newPlatformBottom) {
            this.bottom = newPlatformBottom;
            this.left = Math.random() * 515;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual)
        }
    }

    function createplatforms() {
        for (let i=0; i < platformCount; i++) {
          let platformGap = 600 / platformCount;
          let newPlatformBottom = 100 + i * platformGap;
          let newPlatform = new Platform(newPlatformBottom);
        }
    }

    function start() {
        createplatforms()
    }
   // button later
    start()
})