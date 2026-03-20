
let currentLang = 'es';


function toggleMenu() {
    const menu = document.getElementById('languageMenu');
    menu.classList.toggle('activo');

    //Hide menu when click out
    document.addEventListener('click', function(e) {
    const languages = document.querySelector('.languages');
    const menu = document.getElementById('languageMenu');

    if (!languages.contains(e.target)) {
        menu.classList.remove('activo');
        }

    });
}







function selectLanguage(event) {
    event.stopPropagation();

    const current = document.getElementById('currentLanguage');
    const option = document.getElementById('languageOption');
    const flagOption = document.getElementById('flagOption');

    if (currentLang === 'es') {
        current.innerHTML = `en <img class="language-img" src="Images/Flag_of_USA.png" height="10px">`;
        option.innerHTML = `es <img id="flagOption" class="language-img" src="Images/Flag_of_Peru.png" height="10px">`;
        currentLang = 'en';
    } else {
        current.innerHTML = `es <img class="language-img" src="Images/Flag_of_Peru.png" height="10px">`;
        option.innerHTML = `en <img id="flagOption" class="language-img" src="Images/Flag_of_USA.png" height="10px">`;
        currentLang = 'es';
    }

    document.getElementById('languageMenu').classList.remove('activo');
}

document.addEventListener('click', function(e) {
    const languages = document.querySelector('.languages');
    const menu = document.getElementById('languageMenu');
    if (!languages.contains(e.target)) {
        menu.classList.remove('activo');
    }
});




/*
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header-nav a');

window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 80; 
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove('activo');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('activo');
        }
    });
});
*/
             
