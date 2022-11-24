document.addEventListener('DOMContentLoaded', ()=> {

    const grid = document.getElementById('grid');
    let platformCount = 5;


    class Platform {
        constructor() {
            this.bottom = newPlatformBottom;
            this.left = Math.random() * 515;
            
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