//ini file javascript

console.log('Hallo world');

//function to validate form
function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    
    console.log(nameInput);
    if (nameInput == '') {
    alert('Name most be filled out');
    } else {
        //display result form
        document.getElementById('user-greeting').innerHTML = nameInput
    }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);



let currentSlide = 0;
let autoSlideInterval;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach(slide => (slide.style.display = 'none'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveSlide(1);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none';
        });
        dots[0].classList.add('active');

        startAutoSlide();

        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    });



