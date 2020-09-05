var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

///enother way
// const slides = document.querySelector('.slide');
// const slideCount = slides.childElementCount;
// const maxLeft = (slideCount - 1) * 100 * -1;

// let current = 0;
// setInterval(() => {
//     if (current > maxLeft) {
//         current -= 100;
//         slides.style.left = current + '%';
//     } else {
//         current = 0;
//         slides.style.left = 0;
//     }
// }, 1500);