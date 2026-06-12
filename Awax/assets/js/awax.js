const button1 = document.querySelector('.n1');
const button2 = document.querySelector('.n2');
const button3 = document.querySelector('.n3');
const sliders = document.querySelector('.sliders');

button1.addEventListener('click',() => {slide(1)});
button2.addEventListener("click",() => {slide(2)});
button3.addEventListener("click",() => {slide(3)});

function slide(value){
    switch(value){
        case 1:
            if(button2.classList.contains('active')){
                sliders.style.marginLeft = "0vw";
                button1.classList.add('active');
                button2.classList.remove('active');
            }
            else if(button3.classList.contains('active')){
                sliders.style.marginLeft = "0vw";
                button1.classList.add('active');
                button3.classList.remove('active');
            }
        break;

        case 2:
            if(button1.classList.contains('active')){
                sliders.style.marginLeft = "-100vw";
                button2.classList.add('active');
                button1.classList.remove('active');
            }
            else if(button3.classList.contains("active")){
                sliders.style.marginLeft = "-100vw";
                button2.classList.add('active');
                button3.classList.remove('active');
            }
        break;

        case 3:
            if(button1.classList.contains('active')){
                sliders.style.marginLeft = "-200vw";
                button3.classList.add('active');
                button1.classList.remove('active');
            }
            else if(button2.classList.contains("active")){
                sliders.style.marginLeft = "-100vw";
                button3.classList.add('active');
                button2.classList.remove('active');
            }
        break;
    }
}