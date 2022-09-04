const items = document.querySelectorAll('.main .content .item');
const slider = document.querySelector('.slider');
const sliderContent = document.querySelector('.slider .slider-content');
const sliderContentItem = document.querySelector('.slider .slider-content .item');
const yerevan = document.querySelector('.main .content .yerevan');
const nextButton = document.querySelector('.slider .buttons .next');
const prevButton = document.querySelector('.slider .buttons .prev');
const selectOtherCities = document.querySelector('.slider .select-other-cities');

let selectImg = [['img/yerevan/1.jpg', 'img/yerevan/2.jpg', 'img/yerevan/3.jpg', 'img/yerevan/4.jpg', 'img/yerevan/5.jpg'],
                 ['img/gyumri/1.jpg', 'img/gyumri/2.jpg', 'img/gyumri/3.jpg', 'img/gyumri/4.jpg'],
                 ['img/dilijan/1.jpg', 'img/dilijan/2.jpg', 'img/dilijan/3.jpg', 'img/dilijan/4.jpg'],
                 ['img/kapan/1.jpg', 'img/kapan/2.jpg', 'img/kapan/3.jpg', 'img/kapan/4.jpg']];
let lock = false;
let current = 0;
for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
        for (var j = 0; j < selectImg[i].length; j++) { 
            items[i].style = 'pointer-events: none;';
            let createItem = document.createElement('div');
            createItem.classList.add('item');
            createItem.style = `background: url(${selectImg[i][j]}) center / cover`;
            sliderContent.style = `width: ${j+1}00%;`;
            sliderContent.append(createItem);
            slider.style = 'top: 0;';;
            nextButton.onclick = () => {
                current++;
                current > (selectImg[i].length-1) ? current = 0 : '';
                sliderContent.style.left = `-${current}00%`;
            }
            prevButton.onclick = () => {
                current--;
                current < 0 ? current = (selectImg[i].length-1) : '';
                sliderContent.style.left = `-${current}00%`;  
            }
        }
    }
}
selectOtherCities.addEventListener('click', () => window.location.reload());
