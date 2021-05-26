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

    sliderNext.addEventListener('click', () => {
        position -= itemWidth
        setPosition();
        checkBtn();
    });

    sliderPrev.addEventListener('click', () => {
        position += itemWidth
        setPosition();
        checkBtn();
    });

    const setPosition = () => {
        list.style.transform = `translateX(${position}px)`;
    }

    const checkBtn = () => {
        sliderPrev.disabled = position === 0;
        sliderNext.disabled = position <= -(itemsCount - 1) * itemWidth;
    };

    checkBtn();
