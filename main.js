// TOGGLE NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// SCROLL SECTION ACTIVE
let sections = document.querySelectorAll('section'); // Menggunakan querySelectorAll untuk mengambil semua elemen section
let navLinks = document.querySelectorAll('header nav a'); // Menggunakan querySelectorAll untuk mengambil semua link nav

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Menghapus kelas active dari semua link
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Menambahkan kelas active pada link yang sesuai
        }
    });


// STICKY NAVBAR

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// SCROLL REVEAL
ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, header', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .project-box, .contact form, .sosial-media2, .contact h3', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

//  TYPED JS
const typed = new Typed('.multiple-text', {
    strings : ['UI/UX Designer', 'Frontend Developer', 'Gamer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true,
});