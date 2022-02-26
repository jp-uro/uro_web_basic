const pixel = window.devicePixelRatio;
let background = "src/img/background_main.jpg";
if (pixel >= 1.5) {
    background = background.replace('.jpg', '@1.5x.jpg');
} else if (pixel >= 2) {
    background = background.replace('.jpg', '@2x.jpg');
}
document.querySelector('.background_inner').style.backgroundImage = 'url(' + background + ')';