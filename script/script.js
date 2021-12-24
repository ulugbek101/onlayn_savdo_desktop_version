let controlsBtn = document.querySelectorAll('.menu__item'),
    controlsTabs = document.querySelectorAll('.tabs__block');

    function Togl() {
        for (let i = 0; i < controlsTabs.length; i++) {
            controlsTabs[i].classList.remove('block');  
            controlsBtn[i].classList.remove('white');  
            
        }
    }
    
for (let i = 0; i < controlsBtn.length; i++) {
    controlsBtn[i].addEventListener('click', function() {
        Togl()
        let att = this.getAttribute('controls');
        controlsTabs[att].classList.add('block');
        controlsBtn[att].classList.add('white');
        
    })
    
}

