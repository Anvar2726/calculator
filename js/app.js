const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const soundEffect = document.querySelector('.audio');
const errorSound = document.querySelector('.error-sound');


buttons.forEach(btn =>{
    btn.addEventListener('click', function(e){
        switch(e.target.innerText){
            case 'C':
                soundEffect.play();
                display.innerText = '';
                break;
            case '←':
               if(display.innerText){
                   soundEffect.play();
                    display.innerText = display.innerText.slice(0, -1);
               }
                break;
            case '=':
                try{
                    soundEffect.play();
                    display.innerText = eval(display.innerText);
                }catch{
                    soundEffect.pause();
                    errorSound.play();
                    display.innerText = 'Error!' 
                }
                break;
            default : soundEffect.play();
            display.innerText += e.target.innerText ;
            
        }
    })
})
