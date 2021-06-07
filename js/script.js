let position = 0;

const list = document.querySelector('.slider-list');
const item = document.querySelector('.slider-item');
    
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
    
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = list.clientWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

function next(){
    position -= itemWidth
    setPosition();
    checkBtn();
}

function prev(){
    position += itemWidth
    setPosition();
    checkBtn();
}

sliderNext.addEventListener('click', () => {
    next();
});

sliderPrev.addEventListener('click', () => {
    prev();
});

const setPosition = () => {
    list.style.transform = `translateX(${position}px)`;
}

const checkBtn = () => {
    sliderPrev.disabled = position == 0;
    sliderNext.disabled = position <= -(itemsCount - 1) * itemWidth;
};

checkBtn();


list.addEventListener('touchstart', handleTouchStart, false);
list.addEventListener('touchmove', handleTouchMove, false);
let x1 = null;
let y1 = null;

function handleTouchStart(event){
    const firstTouch = event.touches[0];
    
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event){
    if (!x1 || !y1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    console.log(position);
    if (Math.abs(xDiff) > Math.abs(yDiff)){
        //r-l
        if (xDiff > 0 ) {
            //right - prev
            console.log('pos' + position);
            if (position != 0) {
                prev();
            }
        }
        else {
            //left - next
            if (position >= (-(itemsCount - 1) * itemWidth) + itemWidth) {
                next();
            }
        }
    }

    x1 = null;
    y1 = null;
}
