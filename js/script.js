/* ======================== CONFIGURAÇÕES INICIAIS ======================== */
const funcoesBanner = ['Jonathan Mauro', 'Engenheiro de Software', 'Engenheiro de Dados', 'Inteligência Artificial'];

document.addEventListener('DOMContentLoaded', function () {
    // 1. EFEITO DE DIGITAÇÃO (TYPED.JS) - UNIFICADO
    new Typed('.typed', {
        strings: funcoesBanner,
        typeSpeed: 85,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
    });

    // 2. FILTRO DO PORTFÓLIO (VANILLA JS) - UNIFICADO
    const portfolioFilters = document.querySelectorAll('#portfolio-filters li');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach((filter) => {
        filter.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            // Atualiza classe ativa no filtro
            portfolioFilters.forEach(el => el.classList.remove('filter-active'));
            this.classList.add('filter-active');

            // Filtra os itens
            portfolioItems.forEach((item) => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. ANIMAÇÃO DE SKILLS (INTERSECTION OBSERVER)
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const width = progressBar.getAttribute('aria-valuenow') + '%';
                progressBar.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    });

    progressBars.forEach(progress => observer.observe(progress));
});

/* ======================== NAVEGAÇÃO E MENU (ASIDE) ======================== */
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length,
    navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function (e) {
        e.preventDefault();
        removeBackSection();
        
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');
        showSection(this);
        
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function addBackSection(num) {
    allSection[num].classList.add('back-section');
}

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}

// Botão "Hire Me" (Contrate-me)
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

/* ======================== ANIMAÇÕES DE SCROLL ======================== */
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-right, .fade-left');
    
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition - window.innerHeight <= 0) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });

    // Fecha o style switcher ao rolar
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

/* ======================== STYLE SWITCHER (CORES E TEMA) ======================== */
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});