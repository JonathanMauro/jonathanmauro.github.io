

// Função para lidar com o clique nos links das seções
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Obtém todos os links das seções
const sectionLinks = document.querySelectorAll('.links-site a');

// Adiciona o evento de clique a cada link
sectionLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const sectionId = link.getAttribute('href').substr(1); // Obtém o ID da seção
    scrollToSection(sectionId); // Chama a função para fazer o scroll suave até a seção
  });
});


//EFEITO DE APARECE E SUMIR NOME NO BANNER
funcoes = ['Desenvolvedor Web Fullstack', 'Freelancer', 'Data Science']

document.addEventListener('DOMContentLoaded', function () {
	let typed = new Typed('.typed', {
		strings: funcoes,
		typeSpeed: 85, // Velocidade de digitação (em milissegundos)
		backSpeed: 30, // Velocidade de remoção (em milissegundos)
		loop: true, // Repetir animação
		loopCount: Infinity, // Número de vezes para repetir (-1 para infinito)
	});
});

/* Sobre Animação */
window.addEventListener('scroll', function () {
	const fadeRightElements = document.querySelectorAll('.fade-right');
	const fadeLeftElements = document.querySelectorAll('.fade-left');

	fadeRightElements.forEach(function (element) {
		const elementPosition = element.getBoundingClientRect().top;

		if (elementPosition - window.innerHeight <= 0) {
			element.classList.add('show');
		} else {
			element.classList.remove('show');
		}
	});

	fadeLeftElements.forEach(function (element) {
		const elementPosition = element.getBoundingClientRect().top;

		if (elementPosition - window.innerHeight <= 0) {
			element.classList.add('show');
		} else {
			element.classList.remove('show');
		}
	});
});


/*Portifolio*/
$(document).ready(function() {
	// Captura o clique nos botões do filtro
	$('#portfolio-filters li').click(function() {
	  // Remove a classe "filter-active" de todos os botões
	  $('#portfolio-filters li').removeClass('filter-active');
	  // Adiciona a classe "filter-active" ao botão clicado
	  $(this).addClass('filter-active');
	  
	  // Obtém a classe de filtro do botão clicado
	  const filterClass = $(this).data('filter');
	  
	  // Oculta todos os itens do portfólio
	  $('.portfolio-item').hide();
	  
	  // Mostra apenas os itens do portfólio com a classe de filtro correspondente
	  $(filterClass).show();
	});
  });


//portifolio click
  




/*Skills Bar Animação*/
const progressBars = document.querySelectorAll('.progress');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('.progress-bar');
      const width = progressBar.getAttribute('aria-valuenow') + '%';
      progressBar.style.width = width;
      observer.unobserve(entry.target);
    }
  });
});

progressBars.forEach(function (progress) {
  observer.observe(progress);
});

/*PORTFOLIO*/
window.addEventListener('DOMContentLoaded', () => {
	const portfolioContainer = document.querySelector('.portfolio-container');
	const portfolioItems = document.querySelectorAll('.portfolio-item');
	const portfolioFilters = document.querySelectorAll('#portfolio-filters li');

	portfolioFilters.forEach((filter) => {
		filter.addEventListener('click', function () {
			const filterValue = this.getAttribute('data-filter');

			portfolioFilters.forEach((el) => {
				el.classList.remove('filter-active');
			});

			this.classList.add('filter-active');

			portfolioItems.forEach((item) => {
				if (filterValue === '*' || item.classList.contains(filterValue)) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});

			if (filterValue === '*') {
				portfolioItems.forEach((item) => {
					item.style.display = 'block';
				});
			}
		});
	});
});


//controle de rolagem de pagina

// Obtém todas as âncoras dentro do menu
let links = document.querySelectorAll('.menu a');

// Adiciona um evento de clique a cada âncora
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove a classe "active" de todos os ícones
    links.forEach(function(link) {
      link.querySelector('i').classList.remove('active');
    });
    
    // Adiciona a classe "active" ao ícone correspondente ao link clicado
    this.querySelector('i').classList.add('active');
  });
});



