# Slider

The carousel component is adapted for mobile devices and computers. Supports swipes in mobile version. When scrolling slides to the end of the slider, the "next" button becomes inactive, and the swipe does not work, respectively, when scrolling to the beginning of the slider.

![alt video](https://github.com/lizamarmysh/Scandiweb/dev/img/1.gif)

## Displaying multiple slides on the screen

The slider supports displaying and scrolling multiple slides on the screen at the same time. In order to change the number of displayed slides, you need to: change the value of the **sliderToShow** variable in the _script.js_ file, and to change the number of slides when scrolling, you need to change the value of the **sliderToScroll** variable.
To add another slide with information, you need to add a new item **li .slider-item** in the **ul .slider-list** in the _index.html_ file, observing the class hierarchy.
