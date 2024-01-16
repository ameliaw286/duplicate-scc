// Background for homepage
for (let i = 1; i <= 45; i++) {
    let stars = document.createElement('div');
    stars.classList.add('star');
    let size = Math.random() * 20;
    stars.style.fontSize = 10 + size + 'px';
    stars.style.left = Math.random() * + innerWidth + 'px';
    stars.style.top = Math.random() * + innerHeight + 'px';
    document.querySelector('.sec').appendChild(stars);
}

function animateStars() {
    let AllStars = document.querySelectorAll('.star');
    let num = Math.floor(Math.random() * AllStars.length);
    AllStars[num].classList.toggle('animate');
}
setInterval(animateStars, 150);